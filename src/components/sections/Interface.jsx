import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { textVariants } from "../ui/text";
import { dashboard } from "../../assets";
import FadeInOnScroll from "../common/FadeInScroll";


const Interface = () => {
  return (
    <Section id={"interface"} gap={"lg"} layout={"flexcolumn"}>
      <Container
        gap={"lg"}
        padding={"md"}
        layout={"flexcolcenter"}
        className="hero-content "
      >
        
        <FadeInOnScroll delay={'.5'}>
          <h2
          className={`text-center text-gradient-primary ${textVariants({
            intent: "title",
          })}`}
        >
          A Glimpse Into Your Smart Research Dashboard
        </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={'.5'}>
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
            everything — from powerful analysis tools to real-time summarization —
            all in one beautifully designed, distraction-free interface.
          </p>
        </FadeInOnScroll>

        <div className="image w-[100%] sm:w-[80%] xl:w-[1200px]">
          <FadeInOnScroll delay={'.8'}>
            <img
            src={dashboard}
            alt="dashboard"
            className="w-full object-cover dashboard-image"
          />
          </FadeInOnScroll>
        </div>
      </Container>
    </Section>
  );
};

export default Interface;
