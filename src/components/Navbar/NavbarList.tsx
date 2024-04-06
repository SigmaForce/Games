import { cn } from "@/helpers/cn";
import { NavbarListProps } from "./types";

export const NavBarList = ({
  children,
  className,
  ...props
}: NavbarListProps) => {
  return (
    <ul
      {...props}
      className={cn(
        "my-4 border-t  border-indigo-400/20 hover:border-indigo-400/40",
        className
      )}
    >
      {children}
    </ul>
  );
};
