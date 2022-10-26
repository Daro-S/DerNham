import {Avatar, createStyles, Menu, Text} from '@mantine/core';
import {openConfirmModal} from '@mantine/modals';
import {signOut, useSession} from 'next-auth/react';
import {useTranslation} from 'next-i18next';
import {buildImageUrlThumb} from '~/utils';
import NoSigned from './NoSigned';

const useStyles = createStyles(theme => ({
  profile: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing.md,

    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

function Profile() {
  const session = useSession();
  const {classes} = useStyles();
  const {t} = useTranslation();

  const openModal = () =>
    openConfirmModal({
      title: 'Sign out',
      centered: true,
      children: <Text>Are you sure you want to sign out?</Text>,
      labels: {confirm: t('logout'), cancel: t('cancel')},
      confirmProps: {color: 'red'},
      onConfirm: () => signOut(),
    });

  if (session.status === 'unauthenticated') {
    return <NoSigned />;
  }

  return (
    <Menu width={200} withArrow>
      <Menu.Target>
        <div className={classes.profile}>
          <Avatar
            color="brand"
            radius="xl"
            src={buildImageUrlThumb(session.data?.user?.image ?? undefined)}
          />
          <Text ml="xs" weight="600" size="sm">
            {session.data?.user?.name}
          </Text>
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>{t('myBooking')}</Menu.Item>
        <Menu.Item>{t('saved')}</Menu.Item>
        <Menu.Item>{t('editProfile')}</Menu.Item>
        <Menu.Item color="red" onClick={openModal}>
          {t('logout')}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default Profile;
