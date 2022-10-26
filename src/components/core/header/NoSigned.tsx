import { BiUser } from "react-icons/bi";
import { useTranslation } from "next-i18next";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { LoginForm } from "~/components/login";
import { useProviders } from "~/services/auth";

function NoSigned() {
  const { t } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);
  const { data, isSuccess } = useProviders();

  return (
    <>
      <Modal centered opened={opened} onClose={() => close()}>
        {isSuccess && <LoginForm withBorder={false} providers={data} />}
      </Modal>
      <Button ml="sm" radius="md" leftIcon={<BiUser />} onClick={open}>
        {t("login")}
      </Button>
    </>
  );
}

export default NoSigned;
