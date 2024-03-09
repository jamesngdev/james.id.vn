import menuItems from "@/shared/constants/menu";
import cn from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();

  return (
    <div className="menu flex items-center gap-2 text-sm">
      {menuItems.map((item) => (
        <Link
          href={item.path}
          key={item.path}
          className={cn(
            "text-secondary_accent min-w-20 p-2 rounded-3xl text-center bg-transparent flex items-center justify-center gap-1 transition-all hover:bg-[#60a5fa1a]",
            {
              "bg-[#60a5fa1a]": router.pathname === item.path,
            },
          )}
        >
          <item.icon size={14} />
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
