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
  const imageRef = useRef(null);

useEffect(() => {
  if (imageRef.current) {
    ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top 100%",
      onEnter: () => {
        gsap.delayedCall(1.5, () => {   
          imageRef.current.classList.add("active");
        });
      }, 
    });
  }
}, []);

  return (
    <Section id={"interface"} layout={"flexcolumn"}>
      <Container
        gap={"lg"}
        padding={"md"}
        layout={"flexcolcenter"}
        className="hero-content "
      >
        <FadeInOnScroll>
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

        <div ref={imageRef} className="image relative w-full flex justify-center py-14">
            <img 
              src={dashboard}
              alt="dashboard"
              className="w-[90%] md:w-[80%] object-cover dashboard-image "
            />
        </div>
      </Container>
    </Section>
  );
};

export default Interface;
