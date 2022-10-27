import Image from 'next/image';
import {forwardRef} from 'react';
import {useRouter} from 'next/router';
import {BiSearch} from 'react-icons/bi';
import {useDebouncedState} from '@mantine/hooks';
import {Autocomplete, createStyles, Group, Skeleton, Text} from '@mantine/core';

import {buildThumb} from '~/utils';
import {useSearch} from '~/services/search';
import {ISearchSuggest, SuggestType} from '~/domains/search';
import {useSearchFormContext} from './context';
import {useTranslation} from 'next-i18next';

export const SearchBox = () => {
  const router = useRouter();
  const form = useSearchFormContext();
  const [name, setName] = useDebouncedState('', 300);
  const {data, isLoading} = useSearch(name);
  const {classes} = useStyles();
  const {t} = useTranslation(['home']);

  const handleItemSubmit = (item: ISearchSuggest) => {
    if (Number(item.type) === SuggestType.VENDOR) {
      return router.push(`/vendors/${item.id}`);
    }

    form.setFieldValue('search', item.name);
  };

  return (
    <Autocomplete
      size="lg"
      data={data ?? []}
      icon={<BiSearch />}
      placeholder={t('home.searchBoxPlaceholder')}
      itemComponent={SelectItem}
      maxDropdownHeight={400}
      classNames={{
        root: classes.root,
        input: classes.input,
        item: classes.item,
      }}
      nothingFound={
        isLoading ? (
          <Loading />
        ) : (
          <Text size="xs">{t('home.searchBoxNothingFound')}</Text>
        )
      }
      onChange={val => setName(val)}
      onItemSubmit={handleItemSubmit}
    />
  );
};

type ItemProps = React.ComponentPropsWithoutRef<'div'> & ISearchSuggest;

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({uploadImage, name, ...others}: ItemProps, ref) => {
    const {classes} = useStyles();

    const thumb = buildThumb(uploadImage);
    return (
      <div ref={ref} {...others}>
        <Group noWrap>
          <div>
            <Image
              alt={name}
              width={40}
              height={40}
              layout="fixed"
              className={classes.image}
              blurDataURL={thumb.blurDataURL}
              src={thumb.url}
            />
          </div>
          <Text size="sm">{name}</Text>
        </Group>
      </div>
    );
  },
);

const Loading = () => {
  return (
    <>
      {[1, 2].map(item => (
        <Group mx="xs" mb="xs" key={item}>
          <Skeleton width={40} height={40} radius="sm" />
          <div>
            <Skeleton height={8} mt={6} width={200} radius="xl" />
            <Skeleton height={5} mt={6} width={100} radius="xl" />
          </div>
        </Group>
      ))}
    </>
  );
};

const useStyles = createStyles(theme => ({
  root: {
    width: 350,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: 395,
    },
  },
  input: {
    fontSize: theme.fontSizes.xs,
  },
  item: {
    paddingLeft: theme.spacing.xs,
    paddingTop: theme.spacing.xs,
    paddingBottom: 5,
  },
  btnLabel: {
    fontWeight: 'normal',
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[7],
  },
  image: {
    borderRadius: theme.radius.sm,
  },
}));
