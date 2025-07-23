import React from "react";
import Navbar from "../../components/nav/Navbar";

export default function page() {
  return (
    <div>
      <div className="bg-red-300 col-span-2">sidebar</div>
      <div className="bg-blue-400 col-span-10">this is the rest</div>
    </div>
  );
}
