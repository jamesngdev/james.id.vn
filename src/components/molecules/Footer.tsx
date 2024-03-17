import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-10 content-wrapper text-white pb-20">
      <div className=" w-full h-[1px] bg-gray-300 mb-2"></div>
      <div className="flex items-center gap-3">
        <Link href="https://linkedin.com/jamesngdev" className="font-light">
          LinkedIn
        </Link>
        <Link href="https://github.com/jamesngdev" className="font-light">
          Github
        </Link>
        <Link href="/" className="font-light">
          Facebook
        </Link>
      </div>
    </div>
  );
}
