import { GetServerSidePropsContext } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "~/pages/api/auth/[...nextauth]";

export const getCurrentUser = async (context: GetServerSidePropsContext) => {
  const session = unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  return session;
};
