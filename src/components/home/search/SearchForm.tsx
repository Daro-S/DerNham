import dayjs from 'dayjs';
import {useRouter} from 'next/router';
import {zodResolver} from '@mantine/form';
import {useTranslation} from 'next-i18next';
import {Button, createStyles, Group} from '@mantine/core';

import {serialize} from '~/utils';
import {SearchFormProvider, searchSchema, useSearchForm} from './context';
import {FilterBox} from './FilterBox';
import {SearchBox} from './SearchBox';

export const SearchForm = () => {
  const router = useRouter();
  const {t} = useTranslation();
  const {classes} = useStyles();
  const form = useSearchForm({
    validate: zodResolver(searchSchema),
    initialValues: {
      search: '',
      guest: 1,
      date: dayjs().format('YYYY-MM-DD'),
      time: dayjs().format('HH:mm'),
    },
  });

  return (
    <SearchFormProvider form={form}>
      <form
        onSubmit={form.onSubmit(values => {
          router.push(`/vendors?${serialize(values)}`);
        })}>
        <Group mt="lg">
          <SearchBox />
          <FilterBox />
          <Button
            size="lg"
            type="submit"
            classNames={{label: classes.btnSearch}}>
            {t('search')}
          </Button>
        </Group>
      </form>
    </SearchFormProvider>
  );
};

const useStyles = createStyles(theme => ({
  btnSearch: {
    fontSize: theme.fontSizes.sm,
  },
}));
