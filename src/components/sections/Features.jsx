import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { textVariants } from "../ui/text";
import { star, contextIcon, searchIcon,formatIcon, citationIcon, privacyIcon } from "../../assets";
import { FeaturesCard } from "../common/CardComponents";
import FadeInOnScroll from "../common/FadeInScroll";


const featuresData = [
  {
    image: star,
    title: "Smart-AI Marketing",
    about: "Instantly transform dense academic papers into clear, concise summaries — without losing the core insights.",
  },
  {
    image: contextIcon,
    title: "Contextual Q&A",
    about: "Ask natural questions about your document and get precise, context-aware answers in real-time.",
  },
  {
    image: searchIcon,
    title: "Semantic Search",
    about: "Find key points and references instantly - even across lengthy or technical content - using AI-powered deep search.",
  },
  {
    image: formatIcon,
    title: "Multi-format Support",
    about: "Upload and analyze content from PDFs, Word documents, Google Docs, and more — no conversion needed.",
  },
  {
    image: citationIcon,
    title: "Citation Extractor",
    about: "Automatically pull out references and sources from your research papers for faster bibliography building.",
  },
  {
    image: privacyIcon,
    title: "Privacy-First Design",
    about: "Your documents are never stored or shared. All processing happens securely with full data encryption.",
  },
];


const Features = () => {
  return (
    <Section id={'features'} gap={"lg"} layout={"flexcolumn"}>
     
     <FadeInOnScroll>
       <h2
        className={`text-center text-gradient-primary max-lg:w-[80%] ${textVariants({
          intent: "title",
        })}`}
      >
        Key Features That Make a Difference
      </h2>
     </FadeInOnScroll>

      <Container layout="centered" className="gap-8 z-10 xl:max-w-[1220px]">
        {featuresData.map((item, index) => (
          <FadeInOnScroll
            key={index}
            direction="zoom-in"
            delay={index * 0.2}  
          >
            <FeaturesCard
              image={item.image}
              title={item.title}
              about={item.about}
            />
          </FadeInOnScroll>
        ))}
      </Container>

      <div className="absolute bottom-[8%] left-[14%] bg-blur-medium max-md:h-[500px]"></div>
      
    </Section>
  );
};

export default Features