import Link from 'next/link';
import {
  Button,
  Container,
  createStyles,
  Group,
  Header as MHeader,
  Popover,
  Divider,
  Title,
} from '@mantine/core';
import {useTranslation} from 'next-i18next';
import {BiBell, BiCart} from 'react-icons/bi';
import Notifications from './Notifications';
import Profile from './Profile';
import Logo from './Logo';

const HEADER_HEIGHT = 60;

const useStyles = createStyles(theme => ({
  wrapper: {
    marginBottom: HEADER_HEIGHT,
  },
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

export function Header() {
  const {classes} = useStyles();
  const {t} = useTranslation();

  return (
    <div className={classes.wrapper}>
      <MHeader height={HEADER_HEIGHT} fixed>
        <Container className={classes.inner} size="lg">
          <Logo />
          <Group spacing={5} className={classes.links}>
            <Link href="#">
              <Button
                component="a"
                leftIcon={<BiCart size={18} />}
                variant="subtle"
                color="dark">
                {t('cart')}
              </Button>
            </Link>
            <Popover width={300} withArrow exitTransitionDuration={0}>
              <Popover.Target>
                <Button
                  leftIcon={<BiBell size={18} />}
                  variant="subtle"
                  color="dark">
                  {t('inbox')}
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Title order={4} mb="xs">
                  {t('new')}
                </Title>
                <Notifications />
              </Popover.Dropdown>
            </Popover>
            <Divider orientation="vertical" />
            <Profile />
          </Group>
        </Container>
      </MHeader>
    </div>
  );
}
