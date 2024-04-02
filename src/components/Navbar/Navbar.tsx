import React, { ReactNode } from "react";
import {
  HomeIcon,
  GamepadIcon,
  PrizeIcon,
  RouteIcon,
  UserIcon,
} from "@/components";

const NavBarList = ({ children, className }: { children: ReactNode }) => {
  return (
    <ul
      className={`my-4 border-t  border-indigo-400/20 hover:border-indigo-400/40 ${className}`}
    >
      {children}
    </ul>
  );
};

const NavBarListItem = ({ children, className }: { children: ReactNode }) => {
  return (
    <li
      className={`my-2 rounded-lg bg-transparent p-2 hover:bg-indigo-400/40 hover:text-slate-100 cursor-pointer flex gap-2 items-center${className}`}
    >
      {children}
    </li>
  );
};

export const Navbar = () => {
  return (
    <nav className="flex h-screen flex-col  bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300 ">
      <div className="flex items-center justify-center">
        <img
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
          alt="Logo EmersonBrogadev"
          className="w-auto h-12 p-2"
        />
      </div>
      <NavBarList className="flex-grow">
        <NavBarListItem>
          <HomeIcon className="w-4 h-4" />
          Home
        </NavBarListItem>
        <NavBarListItem>
          <GamepadIcon className="w-4 h-4" />
          Games
        </NavBarListItem>
        <NavBarListItem>
          <PrizeIcon className="w-4 h-4" />
          Top 10
        </NavBarListItem>
        <NavBarListItem>
          <RouteIcon className="w-4 h-4" />
          Walkthroughs
        </NavBarListItem>
      </NavBarList>
      <NavBarList>
        <NavBarListItem>
          <UserIcon className="w-6 h-6 " />
          User
        </NavBarListItem>
      </NavBarList>
    </nav>
  );
};
