import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { textVariants } from "../ui/text";  
import { TestimonialSLider } from "../features/TertimonialSlider";

 

const Testimonials = () => {
  return (
    <Section id={'testimonials'} gap={"lg"} layout={"flexcolumn"} className={' '}>

       <Container
          gap={"lg"}
          padding={"md"}
          layout={"flexcolcenter"}
          className="about-content w-full"
        > 

          <h2
            className={`text-center text-gradient-primary ${textVariants({
              intent: "title",
            })}`}
          >
          What Our Users Are Saying
          </h2>

          <p
            className={`lg:w-[900px] ${textVariants({
              intent: "largetext",
              leading: "lg",
              size: "commonText",
            })}`}
          >
           Hear how researchers, students, and innovators are transforming their workflow with our AI assistant.
          </p>
 
          <TestimonialSLider/>

        </Container>

    </Section>
  );
};

export default Testimonials;
