import {
  Paper,
  Stack,
  Center,
  Avatar,
  Title,
  Text,
  createStyles,
} from "@mantine/core";
import { getProviders, signIn } from "next-auth/react";
import { useTranslation } from "next-i18next";
import SocialButton from "./SocialButton";

type LoginFormProps = {
  withBorder?: boolean;
  providers: Awaited<ReturnType<typeof getProviders>>;
};

export function LoginForm({ providers, withBorder = true }: LoginFormProps) {
  const { classes } = useStyles();
  const { t } = useTranslation(["login"]);

  return (
    <Paper withBorder={withBorder} radius="lg" className={classes.container}>
      <Stack spacing="xl">
        <Center className={classes.header}>
          <Avatar
            mb="xs"
            size="xl"
            src="/images/logo.png"
            className={classes.avatar}
          />
          <Title order={3}>{t("login.header")}</Title>
          <Text size="sm" style={{ opacity: 0.6 }}>
            {t("login.description")}
          </Text>
        </Center>
        <Stack spacing="xs">
          {Object.values(providers ?? {}).map((provider) => (
            <SocialButton
              key={provider.id}
              id={provider.id}
              name={provider.name}
              onClick={() => signIn(provider.id)}
            />
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    width: 400,
    padding: 33,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 50,
  },
  button: {
    alignItems: "flex-start",
  },
}));
