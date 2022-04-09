import React, { useEffect, useRef, useState } from "react";
import Element from "./Element";

export default function CanvasContainer() {
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [elements, setElements] = React.useState([
    {
      id: 1,
      position: { x: 100, y: 100 },
      size: { width: 100, height: 100 },
      rotation: 0,
      selected: false,
    },
  ]);
  const [selectedElement, setSelectedElement] = React.useState(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [delta, setDelta] = React.useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // if (!isDragging) return;
    const { x, y } = e.target.getBoundingClientRect();
    setMousePosition({ x: e.clientX, y: e.clientY });
    setDelta({ x: 0, y: 0 });
  };

  const handleDragEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("drag end");
    setIsDragging((prev) => false);
  };

  const handleDrag = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isDragging) return;

    // const { x, y } = e.target.getBoundingClientRect();
    // console.log("Clicked on: ", x, y);

    // how far mouse has moved from the start of the drag
    const deltaX = e.clientX - mousePosition.x;
    const deltaY = e.clientY - mousePosition.y;

    // setMousePosition({ x: e.clientX, y: e.clientY });
    setDelta({ x: deltaX, y: deltaY });
  };

  return (
    <div
      className="relative w-full h-full flex-grow bg-neutral-900 overflow-hidden"
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      onMouseDown={(e) => {
        handleDragStart(e);
      }}
      // onClick={handleClick}
    >
      {
        // show each Element in the array
        elements.map((element, i) => {
          return (
            <Element
              key={i}
              isDragging={selectedElement === i}
              setIsDragging={setIsDragging}
              mousePosition={delta}
              onClick={() => setSelectedElement(i)}
            />
          );
        })
      }
      <canvas
        ref={canvasRef}
        width={`100%`}
        height={`100%`}
        className="block w-full h-full"
      />
    </div>
  );
}
