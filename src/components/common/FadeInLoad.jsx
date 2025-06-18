// src/components/animations/FadeInOnLoad.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FadeInOnLoad({ children, direction = "up", delay = 0 }) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;

    const dirMap = {
      up: { y: 100, x: 0 },
      down: { y: -100, x: 0 },
      left: { x: 100, y: 0 },
      right: { x: -100, y: 0 },
    };

    const { x, y } = dirMap[direction] || { x: 0, y: 100 };

    gsap.fromTo(
      el,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
      }
    );
  }, [direction, delay]);

  return <div className=" max-w-full flex-center" ref={elRef}>{children}</div>;
}
