import { cn } from "@/helpers/cn";
import Link from "next/link";
import { NavBarListItem } from "./NavbarListItem";
import { NavbarListItemLinkProps } from "./types";

export const NavBarListItemLink = ({
  href,
  children,
  className,
  ...props
}: NavbarListItemLinkProps) => {
  return (
    <NavBarListItem className={cn("p-0", className)}>
      <Link
        href={href}
        className="flex items-center gap-2 rounded-lg  w-full p-2"
        {...props}
      >
        {children}
      </Link>
    </NavBarListItem>
  );
};
