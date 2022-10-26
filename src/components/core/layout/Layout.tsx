import Head from 'next/head';
import {ReactNode} from 'react';
import {Header} from '../header';

type Props = {
  title: string;
  children: ReactNode;
};

export function Layout({title, children}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </>
  );
}
