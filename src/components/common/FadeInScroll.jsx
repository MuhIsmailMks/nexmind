import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeInOnScroll({ children, classname, direction = "up", delay = 0 }) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;

    const animMap = {
      up: { y: 100, x: 0, scale: 1 },
      down: { y: -100, x: 0, scale: 1 },
      left: { x: 100, y: 0, scale: 1 },
      right: { x: -100, y: 0, scale: 1 },
      "zoom-in": { x: 0, y: 0, scale: 0 },
      "zoom-out": { x: 0, y: 0, scale: 2 },
    };

    const fromVars = animMap[direction] || { x: 0, y: 100, scale: 1 };

    const animation = gsap.fromTo(
      el,
      {
        opacity: 0,
        x: fromVars.x,
        y: fromVars.y,
        scale: fromVars.scale,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
          // markers: true,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
    };
  }, [direction, delay]);

  return <div ref={elRef} className={`w-full lg:w-auto max-w-full flex-center ${classname}`}>{children}</div>;
}
