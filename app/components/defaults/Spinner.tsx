import React from "react";
import { LuLoader } from "react-icons/lu";

const Spinner = () => {
  return (
    <span className="animate-spin text-center text-red-400">
      <LuLoader />
    </span>
  );
};

export default Spinner;
