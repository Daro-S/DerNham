import {Container, Title} from '@mantine/core';
import {GetServerSideProps} from 'next';

import {Layout} from '~/components/core';
import {serverTranslates} from '~/utils/translate';

const VendorsPage = () => {
  return (
    <Layout title="Vendors">
      <Container size="lg">
        <Title>Vendors</Title>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {...(await serverTranslates(context.locale!))},
  };
};

export default VendorsPage;
