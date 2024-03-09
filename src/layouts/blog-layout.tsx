import cn from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/atoms/Logo";

import {
  Book,
  BoxTick,
  Call,
  EmojiHappy,
  Home2,
  Personalcard,
} from "iconsax-react";
import Menu from "@/components/atoms/Menu";
import Social from "@/components/atoms/Social";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";

const BlogLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className="mt-20 content-wrapper">{children}</div>
      <Footer />
    </>
  );
};

export default BlogLayout;
