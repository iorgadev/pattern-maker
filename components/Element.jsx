import { useState, useEffect } from "react";

export default function Element({
  element,
  isDragging,
  onMouseDown,
  setSelectedElement,
  mousePosition,
  setElements,
}) {
  // const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 100, height: 100 });
  const [rotation, setRotation] = useState(0);

  const handleMouseDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // onMouseDown(e);
    setSelectedElement(element.id);
  };

  const handleDrag = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isDragging) return;

    // get the element by id that is selectedElement
    // const element = elements.find((element) => element.id === selectedElement);

    // get the delta of mouse position
    const deltaX = e.clientX - mousePosition.x;
    const deltaY = e.clientY - mousePosition.y;
    // const deltaX = e.clientX - mousePosition.x;
    // const deltaY = e.clientY - mousePosition.y;

    console.log(deltaX, deltaY);

    // set the new position of the element
    element.position.x += deltaX;
    element.position.y += deltaY;

    // update the elements array with the updated element
    setElements((prev) => [...prev, element]);

    // if (element.id === selectedElement) {
    //   console.log(`element.position.x: ${element.position.x}`);
    //   console.log(`element.position.y: ${element.position.y}`);
    // }
    // update the mouse position
    // setMousePosition({ x: e.clientX, y: e.clientY });
    // setDelta({ x: deltaX, y: deltaY });
  };

  return (
    <div
      className={`absolute border-2 ${
        isDragging ? "border-green-500" : "border-red-500"
      }`}
      style={{
        transform: `translate(${element.position.x}px, ${element.position.y}px)`,
        width: size.width,
        height: size.height,
      }}
      onMouseDown={(e) => {
        handleMouseDown(e);
      }}
      onMouseMove={(e) => handleDrag(e)}

      // onMouseDown={onClick(element)}
      // onMouseUp={(e) => handleDragEnd(e)}
      // onClick={(e) => onClick(element)}
    ></div>
  );
}
