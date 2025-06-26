import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate(${position.x - 32}px, ${position.y - 32}px)`,
      }}
    >
      <div className="w-16 h-16 rounded-full bg-blue-500 opacity-70 blur-2xl animate-pulse"></div>
    </div>
  );
};

export default CustomCursor;
