import { useState, useEffect } from "react";

export default function Element({
  isDragging,
  mousePosition,
  setIsDragging,
  onClick,
}) {
  // const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 100, height: 100 });
  const [rotation, setRotation] = useState(0);
  const [mouseClickPosition, setMouseClickPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    console.log("element: drag start");
    setIsDragging((prev) => true);
    setMouseClickPosition({ x: e.clientX, y: e.clientY });
  };

  const handleDragEnd = (e) => {
    console.log("element: drag end");
    setIsDragging((prev) => false);
  };

  return (
    <div
      className="absolute border-2 border-red-500"
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        width: size.width,
        height: size.height,
      }}
      onMouseDown={(e) => handleDragStart(e)}
      onMouseUp={(e) => handleDragEnd(e)}
      onClick={onClick}
    ></div>
  );
}
