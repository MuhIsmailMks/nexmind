import React from "react";
import { Container } from "../ui/container";
import { Section } from "../ui/section";
// import { bghero, heroimage } from "../assets";
import { textVariants } from "../ui/text";
import { Button } from "../ui/button";  
import { bghero, heroimage } from "../../assets";
import { ButtonArrow } from "../common/Icon";


  

const Home = () => {
  return (
    <Section gap={"lg"} layout={"centered"} className={"py-20 md:py-40 mt-[-50px] min-[1700px]:mt-0  "}>
      
      <Container
        variant="background"
        className="background-container "
        layout={"centered"}
      >
        <img
          src={bghero}
          alt=""
          className="w-[100%] xl:w-[200%] h-[50%] xl:h-[100%] object-cover"
        />
        <img
          src={bghero}
          alt=""
          className="w-[100%] xl:w-[200%] h-[50%] xl:h-[100%] object-cover absolute bottom-[0%] lg:hidden"
        />
        <img
          src={bghero}
          alt=""
          className="w-[100%] xl:w-[200%] h-[50%] xl:h-[100%] object-cover absolute top-[0%] lg:hidden"
        />

        {/* circle hero image */}
        <img
          src={heroimage}
          alt="heroimage"
          className="w-[80%] sm:w-[70%] lg:w-[50%] max-w-[900px] aspect-square object-cover absolute"
        />

      </Container>

      <Container
        gap={"lg"}
        padding={"md"}
        layout={"flexcol"}
        className="hero-content lg:w-[1000px]"
      >
        <h1 className={`text-center text-gradient-primary max-sm:w-[90%]`}>
          <span className={`${textVariants({ intent: "heroTitle" })}`}>
            Accelerate your
          </span>
          <br />
          <span className={`${textVariants({ intent: "heroTitle2" })}`}>
            Research with AI
          </span>
        </h1>

        <p className={`${textVariants({ intent: "largetext", leading:'md' })}`}>
          Find, understand, and organize research{" "}
          <span className="text-primary">reports in minutes</span>. Get insights
          from thousands of sources with a single click.
        </p>

        <Container className="btns w-full" layout={"centered"} gap={"md"}>
          <Button variant="primary" size="lg" text={'md'}  className="button-hover gap-3">
            Start researching
            <ButtonArrow />
          </Button>

          <Button variant="outline" size="lg" text={'md'} className="button-hover gap-3">
            Watch how
            <ButtonArrow />
          </Button>
        </Container>

      </Container>

      <div className="absolute bottom-[-10%] bg-blur-large"></div>
    </Section>
  );
};

export default Home;
