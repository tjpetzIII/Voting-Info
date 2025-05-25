import type { ReactNode } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as RouterLink } from "react-router-dom";

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
  <nav className="bg-pink-200 h-[85px] flex justify-between px-[calc((100vw-1000px)/2)] z-[12]">
    {children}
  </nav>
);

// NavLink
export const NavLink = ({ to, children }: NavLinkProps) => (
  <RouterLink
    to={to}
    className="text-gray-500 flex items-center no-underline px-4 h-full cursor-pointer [&.active]:text-blue-500"
  >
    {children}
  </RouterLink>
);

// Hamburger icon
export const Bars = () => (
  <FaBars className="hidden text-gray-500 md:hidden block absolute top-0 right-0 transform -translate-x-full translate-y-3/4 text-[1.8rem] cursor-pointer" />
);

// Menu wrapper
export const NavMenu = ({ children }: NavMenuProps) => (
  <div className="flex items-center mr-[-24px] hidden md:flex">{children}</div>
);
