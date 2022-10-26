import type { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Container } from "@mantine/core";

import { getCurrentUser } from "~/utils/session";
import { serverTranslates } from "~/utils/translate";
import { getVendors } from "~/services/vendor";
import { Layout } from "~/components/core";
import { News, Search } from "~/components/home";
import Favorite from "~/components/home/favorite";
import { Promotion } from "~/components/home/promotion";
import Newbie from "~/components/home/newbie";
import ListRestaurants from "~/components/home/restaurants";
import { Popular } from "~/components/home/popular";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Search />
      <Container size="lg">
        <News />
        <Favorite />
        <Popular />
        <Promotion />
        <Newbie />
        <ListRestaurants />
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getCurrentUser(context);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["vendors"], getVendors);
  // await queryClient.prefetchQuery(["promotionBanner"], getPromotionBanners);
  // await queryClient.prefetchQuery(["Favorite"], getFavorite);

  return {
    props: {
      session,
      dehydratedState: dehydrate(queryClient),
      ...(await serverTranslates(context.locale!, ["home"])),
    },
  };
};

export default Home;
