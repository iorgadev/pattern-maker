import React from "react";
import {
  SearchIcon,
  PhotographIcon,
  AdjustmentsIcon,
  CloudDownloadIcon,
} from "@heroicons/react/outline";

export default function IconBar() {
  return (
    <div className="iconbar">
      <div className="logo">
        <img src="images/logo2.png" alt="logo" width={`100%`} />
        <span className="font-bold text-xs">Pattern</span>
        <span className="font-bold text-xs">Maker</span>
      </div>

      <div className="iconbar__menu">
        <div className="iconbar__item">
          <SearchIcon />
        </div>
        <div className="iconbar__item">
          <PhotographIcon />
        </div>
        <div className="iconbar__item">
          <AdjustmentsIcon />
        </div>
      </div>

      <div className="iconbar__item iconbar__download">
        <CloudDownloadIcon />
      </div>
    </div>
  );
}
