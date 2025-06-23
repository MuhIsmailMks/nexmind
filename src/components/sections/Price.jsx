import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { textVariants } from "../ui/text";
import { PriceCard } from "../common/CardComponents";
import { proIcon, starterIcon, teamIcon } from "../../assets";
import FadeInOnScroll from "../common/FadeInScroll";

const Price = () => {
  return (
    <Section id={"pricing"} gap={"lg"} layout={"flexcolumn"}>
      <Container
        gap={"lg"}
        padding={"md"}
        layout={"flexcolcenter"}
        className="about-content"
      >
        <FadeInOnScroll>
          <h2
            className={`text-center text-gradient-primary ${textVariants({
              intent: "title",
            })}`}
          >
            Choose the plan that fits your research.
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={".5"}>
          <p
            className={`lg:w-[900px] ${textVariants({
              intent: "largetext",
              leading: "lg",
              size: "commonText",
            })}`}
          >
            Whether you're just getting started or need advanced tools for heavy
            research, we’ve got you covered.
          </p>
        </FadeInOnScroll>

        <Container
          gap={"lg"}
          className={"price-cards-container justify-center lg:items-start"}
        >
          <FadeInOnScroll classname={'price-card-container md:w-[46%] lg:w-auto'} direction="zoom-in" delay={"1"}>
            <PriceCard
              nameprice={"Starter"}
              price={"0"}
              nameBtnPrice={'Get Started Free'}
              icon={starterIcon}
              about={"For Small Businesses"}
              benefits={[
                "Basic AI summarization",
                "Upload up to 3 documents per month",
                "Ask up to 5 questions per document",
              ]}
            />
          </FadeInOnScroll>

          <FadeInOnScroll classname={'price-card-container md:w-[46%] lg:w-auto'} direction="zoom-in" delay={"1.5"}>
            <PriceCard
              nameprice={"Pro"}
              price={"19"}
              nameBtnPrice={'Upgrade to Pro'}
              icon={proIcon}
              about={"For Growing Businesses"}
              primaryBtn
              benefits={[
                "Unlimited document uploads",
                "Advanced summarization & insights",
                "Ask unlimited questions per doc",
                "Save and export summaries",
              ]}
            />
          </FadeInOnScroll>

          <FadeInOnScroll classname={'price-card-container md:w-[46%] lg:w-auto'} direction="zoom-in" delay={"2"}>
            <PriceCard
              nameprice={"Team"}
              price={"59"}
               nameBtnPrice={'Start Team Plan'}
              icon={teamIcon}
              about={"For Established Businesses"}
              benefits={[
                "Everything in Pro",
                "Team workspace & shared docs",
                "Admin & roles management",
                "Priority support",
                "API access (beta)",
              ]}
            />
          </FadeInOnScroll>
        </Container>
      </Container>
    </Section>
  );
};

export default Price;
