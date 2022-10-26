import {Container, Title} from '@mantine/core';
import {GetStaticPaths, GetStaticProps} from 'next';

import {Layout} from '~/components/core';
import {serverTranslates} from '~/utils/translate';

const VendorDetailPage = () => {
  return (
    <Layout title="Vendor detail">
      <Container size="lg">
        <Title>VendorDetail</Title>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {...(await serverTranslates(locale!))},
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{params: {id: '1'}}],
    fallback: 'blocking',
  };
};

export default VendorDetailPage;
