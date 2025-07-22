import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="text-lg md:text-xl my-2 flex gap-2">
      <h1 className="h-screen inset-0 sticky text-red-500">Gaming</h1>
      <span>Boi</span>
    </Link>
  );
};

export default Logo;
