"use client";

import React, { ReactElement } from "react";
import ButtonSvg from "../nav/ButtonSvg";
import { icons, Link } from "lucide-react";
import Spinner from "./Spinner";

const ButtonGame = ({
  className,
  onClick,
  link,
  text,
  icon,
}: {
  className?: String;
  onClick?: () => void;
  link?: String;
  text: String;
  icon?: ReactElement;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={true}
      onClick={() => {
        onClick && onClick;
      }}
      className={`${
        className || ""
      } cursor-pointer relative flex-initial gap-2 py-3 text-center m-auto`}
    >
      onClick
      {ButtonSvg(false)}
      <span className="relative">
        {disabled ? <Spinner /> : link ? <Link href={link}>{text}</Link> : text}
      </span>
      {icon && icon}
    </button>
  );
};

export default ButtonGame;
