import type {GetServerSideProps, NextPage} from 'next';
import {dehydrate, QueryClient} from '@tanstack/react-query';
import {useSession} from 'next-auth/react';
import {Box} from '@mantine/core';

import {getCurrentUser} from '~/utils/session';
import {serverTranslates} from '~/utils/translate';
import {getVendors, useVendors} from '~/services/vendor';
import {Layout} from '~/components/core';
// import {Search} from '~/components/home';

const Home: NextPage = ({}) => {
  const session = useSession();
  const {data, isLoading, isError, isSuccess, error} = useVendors();

  if (isError || !isSuccess) {
    return <div>{error?.message}</div>;
  }

  return (
    <Layout title="Home">
      <Box sx={{height: '100vh'}}>
        {/* <Search /> */}
        <pre>{JSON.stringify(session, null, 2)}</pre>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {data.data.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getCurrentUser(context);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['vendors'], getVendors);

  return {
    props: {
      session,
      dehydratedState: dehydrate(queryClient),
      ...(await serverTranslates(context.locale!, ['home'])),
    },
  };
};

export default Home;
