import type { ReactNode } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as RouterLink } from "react-router-dom";
import { clsx } from "clsx";
import React from "react";

interface NavProps {
  children: ReactNode;
}

interface NavLinkProps {
  to: string;
  children: ReactNode;
}
interface NavMenuProps {
  children: ReactNode;
}
// Nav wrapper
export const Nav = ({ children }: NavProps) => (
  <nav className="bg-blue-main h-20 flex justify-center mx-auto px-4">
    {children}
  </nav>
);

// NavLink
export const NavLink = ({ to, children }: NavLinkProps) => (
  <RouterLink
    to={to}
    className={({ isActive }) =>
      clsx(
        "font-mono text-xl flex items-center px-4 h-full cursor-pointer transition-all duration-200",
        {
          "underline underline-offset-4 text-sky-400": isActive,
          "text-white no-underline": !isActive,
        }
      )
    }
  >
    {children}
  </RouterLink>
);

// Hamburger icon
export const Bars = () => (
  <FaBars className="hidden text-gray-500 md:hidden block absolute top-0 right-0 transform -translate-x-full translate-y-3/4 text-[1.8rem] cursor-pointer" />
);

// Menu wrapper
export const NavMenu = ({ children }: NavMenuProps) => {
  const childrenArray = React.Children.toArray(children);
  const [first, ...rest] = childrenArray;

  return (
    <div className="w-full flex items-center justify-between px-4">
      {/* Left-aligned first item (e.g. icon) */}
      <div className="flex items-center">{first}</div>

      {/* Centered remaining nav items */}
      <div className="flex gap-4 justify-center flex-1">{rest}</div>
    </div>
  );
};
