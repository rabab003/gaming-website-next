import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="w-full items-center group justify-between gap-2 px-4 border border-input rounded-xl md:w-[40%] bg-[#333839] ">
      <Input className="bg-transparent text-gray-50 border-none text-base outline-none active:outline-none ring-0 placeholder:text-gray-400 py-2" />
      <SearchIcon className="w-5 h-5 cursor-pointer duration-150 group-hover:text-rose-400" />
    </div>
  );
};

export default Search;
