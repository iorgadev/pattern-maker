import React from "react";
import IconBar from "./IconBar";
import CanvasContainer from "./CanvasContainer";
import OptionsPanel from "./OptionsPanel";

export default function Layout() {
  return (
    <div className="layout">
      <IconBar />
      <OptionsPanel />
      <CanvasContainer />
    </div>
  );
}
