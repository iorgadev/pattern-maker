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
      layer: 0,
    },
    {
      id: 2,
      position: { x: 400, y: 400 },
      size: { width: 200, height: 200 },
      rotation: 0,
      selected: false,
      layer: 1,
    },
  ]);
  const [selectedElement, setSelectedElement] = React.useState(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [delta, setDelta] = React.useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    console.log("drag start");
    e.stopPropagation();
    e.preventDefault();
    // if (!isDragging) return;
    // const { x, y } = e.target.getBoundingClientRect();
    setMousePosition({ x: e.clientX, y: e.clientY });
    // console.log(e.clientX, e.clientY);
    setDelta({ x: 0, y: 0 });
  };

  const handleDragEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!selectedElement) return;
    console.log("drag end");
    setIsDragging((prev) => false);
    setSelectedElement(null);
  };

  // const handleDrag = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   if (!selectedElement) return;

  //   // get the element by id that is selectedElement
  //   const element = elements.find((element) => element.id === selectedElement);

  //   // get the delta of mouse position
  //   const deltaX = e.clientX - mousePosition.x;
  //   const deltaY = e.clientY - mousePosition.y;
  //   // const deltaX = e.clientX - mousePosition.x;
  //   // const deltaY = e.clientY - mousePosition.y;

  //   console.log(deltaX, deltaY);

  //   // set the new position of the element
  //   element.position.x += deltaX;
  //   element.position.y += deltaY;

  //   // update the elements array with the updated element
  //   setElements((prev) => [...prev, element]);

  //   // if (element.id === selectedElement) {
  //   //   console.log(`element.position.x: ${element.position.x}`);
  //   //   console.log(`element.position.y: ${element.position.y}`);
  //   // }
  //   // update the mouse position
  //   setMousePosition({ x: e.clientX, y: e.clientY });
  //   // setDelta({ x: deltaX, y: deltaY });
  // };

  return (
    <div
      className="relative w-full h-full flex-grow bg-neutral-900 overflow-hidden"
      // onMouseMove={handleDrag}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
    >
      {elements.map((element, i) => {
        return (
          <Element
            key={i}
            element={element}
            isDragging={selectedElement === element.id}
            // onMouseDown={handleDragStart}
            setSelectedElement={setSelectedElement}
            mousePosition={mousePosition}
            setElements={setElements}
          />
        );
      })}
      <canvas
        ref={canvasRef}
        width={`100%`}
        height={`100%`}
        className="block w-full h-full"
      />
    </div>
  );
}
