"use client";

import { cn } from "@/helpers/cn";
import { NavbarListItemButtonProps } from "./types";
import { NavBarListItem } from "./NavbarListItem";

export const NavBarListItemButton = ({
  children,
  className,
  ...props
}: NavbarListItemButtonProps) => {
  return (
    <NavBarListItem className={cn("p-0", className)}>
      <button
        className="flex items-center gap-2 rounded-lg  w-full p-2"
        {...props}
      >
        {children}
      </button>
    </NavBarListItem>
  );
};
