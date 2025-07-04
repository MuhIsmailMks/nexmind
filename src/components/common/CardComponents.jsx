import { Container } from "../ui/container";
import { starter, tick } from "../../assets";
import { textVariants } from "../ui/text";
import { Button } from "../ui/button";
import { ButtonArrow } from "./Icon";
import FadeInOnScroll from "./FadeInScroll";

export const AboutCardComponents = ({ number, title, about, image }) => {
  return (
    <Container
      layout={"flexcolcenter"}
      className="card w-[90%] md:w-[350px] lg:w-[391px] h-[400px] pt-12 cursor-pointer duration-200 ease-in-out"
      padding={"lg"}
      gap={"sm"}
    >
      <div className="number flex-center relative w-[48px] aspect-square mb-4">
        <span className={`${textVariants({ intent: "xlargetext" })}`}>
          {number}
        </span>
      </div>

      <h4 className={`${textVariants({ intent: "xlargetext" })}`}>{title}</h4>

      <p className=" text-colortext font-light text-center lg:w-[85%]">
        {about}
      </p>

      <img
        src={image}
        alt={`${title} image`}
        className="absolute w-[90%] md:w-[270.07px] bottom-0"
      />
    </Container>
  );
};

export const FeaturesCard = ({ image, title, about }) => {
  return (
    <Container
      layout={"flexcol"}
      padding={"lg"}
      className={
        "featureCard w-[90%] sm:w-[370px] h-auto sm:h-[216px] rounded-xl  gap-2"
      }
    >
      <div className="w-full mb-2">
        <div className="icon w-[44px] aspect-square flex-center rounded-xl border-[#52525B] border-[1px]">
          <img src={image} alt={`icon for ${image}`} className="w-[25px]" />
        </div>
      </div>
      <h5
        className={`w-full text-left ${textVariants({ intent: "largetext" })}`}
      >
        {title}
      </h5>
      <p className={`w-full text-left leading-[1.3] text-s`}>{about}</p>
    </Container>
  );
};

export const PriceCard = ({
  icon,
  nameprice,
  price,
  about,
  benefits,
  nameBtnPrice,
  primaryBtn = false,
}) => {
  return (
    <Container
      layout={"flexcolcenter"}
      padding={"md"}
      gap={"md"}
      className={
        "price-card w-[360px] sm:w-[292px] max-w-[90%] h-auto rounded-xl  gap-2 p-[24px]"
      }
    >
      <Container className={"w-full"} layout={"flexcol"} gap={"sm"}>
        <div className="icon-container w-full mb-2 flex">
          <div className="icon h-[29px] w-auto px-2 flex-center gap-2 rounded-full border-[#FFFFFF0F] border-[1px]">
            <img src={icon} alt={`icon for ${icon}`} className="w-[21px]" />
            <span
              className={`uppercase text-colortext ${textVariants({
                intent: "smalltext",
              })}`}
            >
              {nameprice}
            </span>
          </div>
        </div>

        <h5 className={`w-full text-left `}>
          <span className="text-smalltitle font-bold pr-2">${price}</span>
          <span className={`${textVariants({ intent: "largetext" })}`}>
            /mo
          </span>
        </h5>

        <p className={`w-full text-left leading-[1.3] text-s`}>{about}</p>

        <div className="line w-full h-[1px] bg-[#2c2c2c] my-4"></div>
      </Container>

      <Container className={"w-full"} layout={"flexcolcenter"} gap={"sm"}>
        {/* benefits */}
        <Container className={"w-full gap-3  "} variant={"flexcolcenter"}>
          {benefits?.map((benefit, index) => (
            <div key={index} className="benefit flex gap-3 w-full">
              <div className="icon w-[24px]">
                <img src={tick} alt="tick" className="w-full" />
              </div>
              <p className={`w-full text-left leading-[1.3] text-m `}>
                {benefit}
              </p>
            </div>
          ))}
        </Container>

        <Button
          variant={primaryBtn ? "primary" : "outline"}
          size="lg"
          text={"md"}
          className="button-hover gap-3 mt-4"
        >
         {nameBtnPrice}
          <ButtonArrow />
        </Button>
      </Container>
    </Container>
  );
};

export const Starter = ({}) => {
  return (
    <Container
      className={`starter w-[90%] sm:w-[50%] lg:w-[90%] xl:w-[1220px] rounded-2xl max-lg:justify-center overflow-hidden`}
      layout={"between"}
      gap={"md"}
      padding={"lg"}
    >
      <Container
        layout={"flexcol"}
        className={"w-full lg:w-[55%] xl:w-[678px]"}
        gap={"md"}
      >
        <FadeInOnScroll >
           <h4
          className={` text-center lg:text-left ${textVariants({
            intent: "title",
          })}`}
        >
          Start your smarter research today
        </h4>
        </FadeInOnScroll>
       <FadeInOnScroll delay={'.5'}>
         <p className={` text-center lg:text-left `}>
          Don't waste time on search engines. Let AI help you research smarter.
          Start for free , No credit card required
        </p>
       </FadeInOnScroll>
      </Container>

      <div className="image w-[80%] lg:w-[40%]  xl:w-[345px] h-auto">
        <FadeInOnScroll direction="zoom-in">
          <img src={starter} alt="starter image" className="w-full" />
        </FadeInOnScroll>
      </div>

      <div className="absolute bottom-[-10%] right-[-20%] bg-blur-medium"></div>
      
    </Container>
  );
};
