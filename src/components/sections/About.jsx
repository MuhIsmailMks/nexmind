import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { textVariants } from "../ui/text";
import { Button } from "../ui/button";
import { ButtonArrow } from "../common/Icon"; 
import { LineWsize } from "../common/Line";
import { AboutCardComponents } from "../common/CardComponents";
import { smartDocument } from "../../assets";

   
const About = () => {
  return (
    <Section id={'about'} gap={"lg"} layout={"flexcolumn"}>
      <article className="w-full relative">
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
         AI-Powered Solutions for Accelerated Business Growth
        </h2>

        <p className={`${textVariants({ intent: "largetext", leading: "lg", size:'commonText' })}`} > Our
           <span className="text-primary"> AI-powered </span> 
          assistant is designed to help you research faster,
          smarter, and more efficiently. Whether you're analyzing academic
          papers, summarizing complex documents, or extracting insights from
          data — our platform is here to streamline the entire process.
          <br />
          <br />
          Say goodbye to hours of manual reading. Let AI handle the heavy
          lifting while you focus on critical thinking and innovation.
        </p>

        <LineWsize width='w-[90%] lg:w-[1000px]'/>

        <Button
          variant="primary"
          size="lg"
          text={"md"}
          className="button-hover gap-3"
        >
          Learn more
          <ButtonArrow />
        </Button>

        <Container layout={'centered'} gap={'sm'} className={'card-about-container '}>
          <AboutCardComponents number={'1'} title={'Smart Document Analysis'} about={'Understand any paper in seconds — not hours.'} image={smartDocument}/>
          <AboutCardComponents number={'2'} title={'AI-Powered Summaries'} about={'Get clean, concise insights from long texts.'} image={smartDocument}/>
          <AboutCardComponents number={'3'} title={'Smart Document Analysis'} about={'Chat with your research documents like you would with an expert.'} image={smartDocument}/>
        </Container>

      </Container>
      </article>
    </Section>
  );
};

export default About;
