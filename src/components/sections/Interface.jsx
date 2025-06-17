import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { textVariants } from "../ui/text";
import { dashboard } from "../../assets";

const Interface = () => {
  return (
    <Section id={"interface"} gap={"lg"} layout={"flexcolumn"}>
      <Container
        gap={"lg"}
        padding={"md"}
        layout={"flexcolcenter"}
        className="hero-content "
      >
        <h2
          className={`text-center text-gradient-primary ${textVariants({
            intent: "title",
          })}`}
        >
          A Glimpse Into Your Smart Research Dashboard
        </h2>

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

        <div className="image w-[100%] sm:w-[80%] xl:w-[1200px]">
          <img
            src={dashboard}
            alt="dashboard"
            className="w-full object-cover dashboard-image"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Interface;
