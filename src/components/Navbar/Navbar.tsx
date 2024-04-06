import React from "react";
import {
  HomeIcon,
  GamepadIcon,
  PrizeIcon,
  RouteIcon,
  UserIcon,
} from "@/components";
import { cn } from "@/helpers/cn";
import { NavbarProps } from "./types";
import { NavBarList } from "./NavbarList";
import { NavBarListItemLink } from "./NavbarListItemLink";

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "flex h-screen flex-col  bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center">
        <img
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
          alt="Logo EmersonBrogadev"
          className="w-auto h-12 p-2"
        />
      </div>
      <NavBarList className="flex-grow">
        <NavBarListItemLink href="/">
          <HomeIcon className="w-4 h-4" />
          Home
        </NavBarListItemLink>
        <NavBarListItemLink href="/games">
          <GamepadIcon className="w-4 h-4" />
          Games
        </NavBarListItemLink>
        <NavBarListItemLink href="/top-10">
          <PrizeIcon className="w-4 h-4" />
          Top 10
        </NavBarListItemLink>
        <NavBarListItemLink href="/walkthroughs">
          <RouteIcon className="w-4 h-4" />
          Walkthroughs
        </NavBarListItemLink>
      </NavBarList>
      <NavBarList>
        <NavBarListItemLink href="/user">
          <UserIcon className="w-6 h-6 " />
          User
        </NavBarListItemLink>
      </NavBarList>
    </nav>
  );
};
