import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import NavLink from "./NavLink";
import Logo from "../defaults/Logo";

export const NAV_LINKS = [
  {
    link: "/",
    label: "Home",
    icon: <GoHomeFill />,
  },
  {
    link: "/category",
    label: "category",
    icon: <BiCategory />,
  },
  {
    link: "/library",
    label: "Library",
    icon: <MdOutlineLibraryBooks />,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: <LiaUserFriendsSolid />,
  },
  {
    link: "/downloads",
    label: "Downloads",
    icon: <IoMdDownload />,
  },
];

function SideBar() {
  return (
    <div className="h-screen flex flex-col gap-3 col-span-2">
      <div className="py-5 px-10 flex flex-col text-gray-50 bg-black/30 items-start">
        <Logo />
        {NAV_LINKS.map((navLink) => (
          <NavLink navLink={navLink} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
