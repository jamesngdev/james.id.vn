import cn from "@/utils/cn";

export default function Title(props: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 {...props} className={cn(props.className, "text-3xl text-white")}>
      {props.children}
    </h2>
  );
}
