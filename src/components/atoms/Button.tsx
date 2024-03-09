import cn from "@/utils/cn";

type ButtonProps = {
  color?: "default" | "primary" | "secondary";
};

function Button(
  props: React.ComponentPropsWithoutRef<"button"> = {
    color: "default",
  },
) {
  const { color } = props;
  return (
    <button
      {...props}
      className={cn("p-2 rounded", props.className, {
        "bg-white text-black": color === "default",
        "bg-accent text-white hover:opacity-70": color === "primary",
      })}
    >
      {props.children}
    </button>
  );
}

export default Button;
