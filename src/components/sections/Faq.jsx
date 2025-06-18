import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { textVariants } from "../ui/text";
import { Button } from "../ui/button";
import { ButtonArrow } from "../common/Icon";
import { LineWsize } from "../common/Line";
import { AboutCardComponents, PriceCard } from "../common/CardComponents";
import { min, plus } from "../../assets";
import { FaqUser } from "../features/FaqUser";
import FadeInOnScroll from "../common/FadeInScroll";


const faqList = [
  {
    id: "item-1",
    title: "How does the AI understand and summarize research papers?",
    content: [
      "Our AI uses advanced natural language processing (NLP) to analyze the content, extract key insights, and summarize complex academic texts in a clear and concise way. It’s trained to understand research structure, terminology, and context.", 
    ],
  },
  {
    id: "item-2",
    title: "Can I upload any type of document?",
    content: [
      "Yes. You can upload PDFs, Word documents, or plain text files. The platform is optimized for academic papers, reports, and technical content.", 
    ],
  },
  {
    id: "item-3",
    title: "Is my uploaded data secure?",
    content: [
      "Absolutely. We use industry-standard encryption, and your documents are never shared or stored longer than necessary. You’re always in control of your data."
    ],
  }, 
  {
    id: "item-4",
    title: "What’s the difference between the Free and Pro plans?",
    content: [
      "The Free plan gives you access to basic summarization and limited uploads. The Pro plan unlocks unlimited documents, full AI capabilities, export features, and more personalized insights."
    ],
  }, 
  {
    id: "item-5",
    title: "Can I use this tool for team or collaborative research?",
    content: [
      "Yes! Our Team plan includes shared workspaces, document sharing, and admin roles — perfect for labs, universities, or startup teams working together on research projects."
    ],
  },  
];

const Faq = () => {
  return (
    <Section  gap={'mobilemd'} className={'py-10 justify-center'} layout={'flex'}>

      <Container
        gap={"lg"} 
        layout={"flexcol"}
        className="about-faq w-[90%] md:w-[624px] lg:pr-10 h-full z-10 items-center xl:items-start">

        <FadeInOnScroll >
           <h2
          className={`text-center lg:text-left text-gradient-primary xl:w-[500px] ${textVariants({
            intent: "title",
          })}`}
        >
          Frequently asked questions
        </h2>
        </FadeInOnScroll>

      <FadeInOnScroll delay={'.5'}>
          <p
          className={`text-center text-colortext lg:text-left   xl:w-[500px] ${textVariants({
            intent: "largetext",
            leading: "lg",
            size: "commonText",
          })}`}
        >
        Got questions? We've got answers. Learn more about how our AI research assistant works, what it can do, and how it fits into your research workflow.
        </p>
      </FadeInOnScroll>

       <FadeInOnScroll delay={'1'}>
         <Button
          variant="primary"
          size="lg"
          text={"md"}
          className="button-hover gap-3"
        >
          Start researching
          <ButtonArrow />
        </Button>
       </FadeInOnScroll>

      </Container>

      <Container gap={"lg"} 
        layout={"flexcol"}
        className="about-faq w-[90%] md:w-[624px] lg:pr-10 z-10">
           <FaqUser faqList={faqList} />
      </Container>


      <div className="right-0 absolute top-[40%] bg-blur-medium"></div>

    </Section>
  );
};

export default Faq;
