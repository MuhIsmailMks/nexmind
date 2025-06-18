// src/components/animations/ScrollFade.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollFade({ children, direction = "up", delay = 0 }) {
  const elRef = useRef(null);

useEffect(() => {
  const el = elRef.current;

  const dirMap = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  const { x, y } = dirMap[direction] || { x: 0, y: 50 };

  const animation = gsap.fromTo(
    el,
    { opacity: 0, x, y },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
        //   markers: true, 
      },
    }
  );

  return () => {
    animation.scrollTrigger?.kill(); // ✅ hanya bunuh yang dibuat di animasi ini
  };
}, [direction, delay]);


  return <div ref={elRef}>{children}</div>;
}
