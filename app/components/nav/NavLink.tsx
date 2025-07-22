"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const NavLink = ({
  navLink,
}: {
  navlink: { link: string; label: string; icon: ReactNode };
}) => {
  const pathName = usePathname();

  const isActive = pathName === navLink.link;
  return (
    <Link
      href={navLink.link}
      className={`flex ${
        isActive ? "text-red-400" : "text-gray-50"
      } gap-2 duration-200 hover:text-rose-400 my-2 items-center p-2 rounded-md`}
    >
      {navLink.label}
      {navLink.icon}
      {React.cloneElement(icon, { className: "w-5 h-5" })}
      {label}
    </Link>
  );
};

export default NavLink;
