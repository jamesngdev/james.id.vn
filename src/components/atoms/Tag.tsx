import cn from "@/utils/cn";

export type TagProps = {
  children: React.ReactNode;
  color:
    | "primary"
    | "secondary"
    | "accent"
    | "danger"
    | "warning"
    | "success"
    | "info";
  className?: string;
};

export default function Tag(props: TagProps) {
  const classByColor = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-white",
    danger: "bg-danger text-white",
    warning: "bg-warning text-white",
    success: "bg-success text-white",
    info: "bg-info text-white",
  };

  return (
    <div
      className={cn("p-2 rounded-xl", props.className, {
        [classByColor[props.color]]: true,
      })}
    >
      {props.children}
    </div>
  );
}
