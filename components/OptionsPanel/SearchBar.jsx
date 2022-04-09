import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <input className="searchbar" type="text" placeholder="Search" />
      <SearchIcon className="absolute right-2 w-7 h-7 text-blue-500 bg-white pl-1" />
    </div>
  );
}
