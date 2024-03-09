import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import "./app.scss";
import BlogLayout from "@/layouts/blog-layout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const inter = Roboto({
  weight: ["500", "300", "700", "900"],
  preload: true,
  subsets: ["vietnamese"],
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout || ((page) => <BlogLayout>{page}</BlogLayout>);

  return (
    <main className={inter.className}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}
