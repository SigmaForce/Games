"use client";
import { cn } from "@/helpers/cn";
import { NavbarMobileProps } from "./types";
import {
  GamepadIcon,
  HomeIcon,
  MenuIcon,
  PrizeIcon,
  RouteIcon,
  UserIcon,
} from "../Icons/Icons";
import Image from "next/image";
import { NavBarList } from "./NavbarList";
import { NavBarListItemLink } from "./NavbarListItemLink";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { useMobileHeader } from "./hooks/useMobileHeader";

export const NavBarMobile = ({ className, ...props }: NavbarMobileProps) => {
  const { isOpenMenu, handleToggleMenu } = useMobileHeader();
  return (
    <>
      <div className="z-50 flex transition-colors duration-300 hover:text-link lg:hidden">
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </div>

      <div className="flex items-center justify-center my-4">
        <Image
          src="/Logo.svg"
          alt="Logo Games"
          width={112}
          height={32}
          className="w-auto h-12 p-2"
        />
      </div>

      {isOpenMenu && (
        <div className="fixed left-0 top-0 z-30 min-h-screen w-screen overflow-hidden bg-slate-900 pt-[4rem] lg:hidden">
          <nav className="mx-auto flex max-w-full items-center justify-center rounded-2xl bg-secondary py-3 shadow-2xl">
            <div className="w-full flex-col px-4">
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
                <NavBarListItemLink href="/auth/sign-in">
                  <UserIcon className="w-6 h-6 " />
                  Login
                </NavBarListItemLink>
              </NavBarList>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
