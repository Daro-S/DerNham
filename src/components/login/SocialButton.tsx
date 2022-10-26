import {MouseEventHandler} from 'react';
import {Button, Image} from '@mantine/core';
import {useTranslation} from 'next-i18next';

type Props = {
  id: any;
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function SocialButton({id, name, onClick}: Props) {
  const {t} = useTranslation(['login']);

  return (
    <Button
      fullWidth
      size="md"
      color="dark"
      variant="outline"
      onClick={onClick}
      leftIcon={<Image src={`/images/${id}.png`} alt={name} width={15} />}
      styles={theme => ({
        root: {
          borderColor: theme.colors.dark[0],
        },
        inner: {
          justifyContent: 'flex-start',
        },
        label: {
          fontSize: theme.fontSizes.sm,
        },
      })}>
      {t('login.socialButton', {value: name})}
    </Button>
  );
}

export default SocialButton;
