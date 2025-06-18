import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { textVariants } from "../ui/text"; 
import {  PriceCard } from "../common/CardComponents";
import { proIcon, starterIcon, teamIcon } from "../../assets";


const Price = () => {
  return (
    <Section id={'pricing'} gap={"lg"} layout={"flexcolumn"}>
       <Container
          gap={"lg"}
          padding={"md"}
          layout={"flexcolcenter"}
          className="about-content"
        >

          <h2
            className={`text-center text-gradient-primary ${textVariants({
              intent: "title",
            })}`}
          >
            Choose the plan that fits your research.
          </h2>

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
 
          <Container gap={"lg"} className={"price-cards-container justify-center lg:items-start"}>

            <PriceCard
              nameprice={"Starter"}
              price={"0"}
              icon={starterIcon}
              about={"For Small Businesses"}
              benefits={[
                "Basic AI summarization",
                "Upload up to 3 documents per month",
                "Ask up to 5 questions per document",
              ]}
            />

            <PriceCard
              nameprice={"Pro"}
              price={"19"}
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

            <PriceCard
              nameprice={"Team"}
              price={"59"}
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

          </Container>

        </Container>

    </Section>
  );
};

export default Price;
