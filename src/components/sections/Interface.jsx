import { useEffect, useRef } from "react";
import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { textVariants } from "../ui/text";
import { dashboard } from "../../assets";
import FadeInOnScroll from "../common/FadeInScroll";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Interface = () => {
  const containerImageRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (containerImageRef.current && imageRef.current) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerImageRef.current,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(containerImageRef.current, { autoAlpha: 1 });
      tl.from(containerImageRef.current, {
        xPercent: -100,
        duration: 1.5,
        ease: "power2.out",
      });
      tl.from(imageRef.current, {
        xPercent: 100,
        scale: 1.3,
        duration: 1.5,
        delay: -1.5,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <Section id={"interface"} gap={"lg"} layout={"flexcolumn"}>
      <Container
        gap={"lg"}
        padding={"md"}
        layout={"flexcolcenter"}
        className="hero-content "
      >
        <FadeInOnScroll delay={".5"}>
          <h2
            className={`text-center text-gradient-primary ${textVariants({
              intent: "title",
            })}`}
          >
            A Glimpse Into Your Smart Research Dashboard
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={".5"}>
          <p
            className={`${textVariants({
              intent: "largetext",
              leading: "lg",
              size: "commonText",
            })}`}
          >
            {" "}
            Whether you're deep into academic research or just trying to make
            sense of a complex document, our intelligent dashboard gives you
            everything — from powerful analysis tools to real-time summarization
            — all in one beautifully designed, distraction-free interface.
          </p>
        </FadeInOnScroll>

        <div className="image w-[100%] sm:w-[80%] xl:w-[1300px] h-[700px]  flex justify-center">
           <div ref={containerImageRef} className="reveal flex-center visible overflow-hidden w-[90%] relative">
                <img
                ref={imageRef}
                src={dashboard}
                alt="dashboard"
                className="w-[90%] object-cover dashboard-image"
              />
           </div>
        </div>
      </Container>
    </Section>
  );
};

export default Interface;
