import {
  Book,
  BoxTick,
  Call,
  EmojiHappy,
  Home2,
  Personalcard,
} from "iconsax-react";
import { MenuItem } from "../types/menu";

const menuItems: MenuItem[] = [
  {
    name: "Home",
    path: "/",
    icon: Home2,
  },

  {
    name: "Blog",
    path: "/blog",
    icon: Book,
  },
  {
    name: "Product",
    path: "/product",
    icon: BoxTick,
  },

  {
    name: "Resume",
    path: "/resume",
    icon: Personalcard,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Call,
  },
];

export default menuItems;
