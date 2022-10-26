import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation, SSRConfig } from "next-i18next";
import { useState } from "react";
import { Session } from "next-auth";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { customCache, theme } from "~/theme";

dayjs.extend(relativeTime);

type MyAppProps = AppProps<{ session: Session; dehydratedState: unknown }> & {
  pageProps: SSRConfig;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <MantineProvider
            emotionCache={customCache}
            theme={theme}
            withCSSVariables
            withGlobalStyles
            withNormalizeCSS
          >
            <ModalsProvider>
              <Component {...pageProps} />
            </ModalsProvider>
          </MantineProvider>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default appWithTranslation<MyAppProps>(MyApp);
