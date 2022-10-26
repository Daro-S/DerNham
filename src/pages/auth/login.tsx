import Head from "next/head";
import type { GetServerSideProps, NextPage } from "next";
import { Center, createStyles } from "@mantine/core";
import { getProviders } from "next-auth/react";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getCurrentUser } from "~/utils/session";
import { LoginForm } from "~/components/login";

type Props = SSRConfig & {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
}));

const Login: NextPage<Props> = ({ providers }) => {
  const { classes } = useStyles();
  const { t } = useTranslation<"login"[], undefined>();

  return (
    <Center className={classes.wrapper}>
      <Head>
        <title>{t("login.title")}</title>
      </Head>
      <LoginForm providers={providers} />
    </Center>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const providers = await getProviders();
  const session = await getCurrentUser(context);

  if (session?.accessToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const t = await serverSideTranslations(context.locale!, ["login"]);

  return {
    props: {
      providers,
      ...t,
    },
  };
};

export default Login;
