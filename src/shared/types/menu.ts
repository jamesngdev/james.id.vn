import { IconProps } from "iconsax-react";

export type MenuItem = {
  name: string;
  path: string;
  icon: React.FC<IconProps>;
};
