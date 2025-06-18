import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { textVariants } from "../ui/text";
import { Button } from "../ui/button";
import { ButtonArrow } from "../common/Icon"; 
import { LineWsize } from "../common/Line";
import { AboutCardComponents } from "../common/CardComponents";
import { smartDocument, summaries, askPDF } from "../../assets"; 
import FadeInOnScroll from "../common/FadeInScroll";
   
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

        <FadeInOnScroll delay={'.5'}>

          <h2
                    className={`text-center text-gradient-primary ${textVariants({
                      intent: "title",
                    })}`}
                  >
                  AI-Powered Solutions for Accelerated Business Growth
        </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={'1'}>
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
        </FadeInOnScroll>

        <LineWsize width='w-[90%] lg:w-[1000px]'/>

        <FadeInOnScroll delay={'1'}>
          <Button
          variant="primary"
          size="lg"
          text={"md"}
          className="button-hover gap-3"
        >
          Learn more
          <ButtonArrow />
        </Button>
        </FadeInOnScroll>

        <Container layout={'centered'} gap={'sm'} className={'card-about-container '}>
          <FadeInOnScroll classname={'md:w-[45%] lg:w-auto'} delay={'1'}>
            <AboutCardComponents number={'1'} title={'Smart Document Analysis'} about={'Understand any paper in seconds — not hours.'} image={smartDocument}/>
          </FadeInOnScroll>
          <FadeInOnScroll classname={'md:w-[45%] lg:w-auto'} delay={'1.2'}>
            <AboutCardComponents number={'2'} title={'AI-Powered Summaries'} about={'Get clean, concise insights from long texts.'} image={summaries}/>
          </FadeInOnScroll>
          <FadeInOnScroll classname={'md:w-[45%] lg:w-auto'} delay={'1.4'}>
            <AboutCardComponents number={'3'} title={'Smart Document Analysis'} about={'Chat with your research documents like you would with an expert.'} image={askPDF}/>
          </FadeInOnScroll>
         
         
        </Container>

      </Container>
      </article>
    </Section>
  );
};

export default About;
