"use client";

import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  const spring = useSpring({
    left: position.x - 150,
    top: position.y - 150,
    opacity: visible ? 1 : 0,
    config: { tension: 80, friction: 30 },
  });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  return (
    <animated.div
      style={spring}
      className="pointer-events-none fixed z-0 h-[300px] w-[300px] rounded-full"
      aria-hidden="true"
    >
      <div className="h-full w-full rounded-full bg-gradient-to-r from-brand/5 via-brand/3 to-transparent blur-[80px]" />
    </animated.div>
  );
}