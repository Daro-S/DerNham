import {Group, Burger, Title, createStyles} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {useTranslation} from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = createStyles(theme => ({
  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
  },
}));

function Logo() {
  const [opened, {toggle}] = useDisclosure(false);
  const {classes} = useStyles();
  const {t} = useTranslation();

  return (
    <Link href="/">
      <a className={classes.link}>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <Image
            src="/images/logo.png"
            width={41}
            height={41}
            layout="fixed"
            alt="Logo"
            style={{borderRadius: 41}}
          />
          <Title size={20}>{t('name')}</Title>
        </Group>
      </a>
    </Link>
  );
}

export default Logo;
