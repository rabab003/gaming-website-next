import React from "react";
import Search from "../Search";
import ButtonGame from "../defaults/ButtonGame";

function Navbar() {
  return (
    <div>
      <header className="flex justify-between items-center">
        <Search />
        <div className="flex items-center gap-2">
          <ButtonGame disabled link="/login" text="login" />
          <ButtonGame link="/signup" text="sign up" />
        </div>
      </header>
    </div>
  );
}

export default Navbar;

//1:05:35
