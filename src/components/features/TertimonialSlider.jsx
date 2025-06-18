import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { logo, profile, starReview } from "../../assets";
import { useIsLargeScreen } from "../common/EmptySpaceSlide";
import FadeInOnScroll from "../common/FadeInScroll";

const testimonials = [
  {
    name: "Kevin R",
    position: "Academic Researcher",
    text: "As a lecturer and researcher, I am greatly helped by the document-based summarization and Q&A features. This is not just an AI, but a truly intelligent research assistant.",
    avatar: profile,
    stars: 5,
  },
  {
    name: "Michael T",
    position: "Founder Startup",
    text: "We use this tool for market research and literature studies. The UI is clean, the features are relevant, and the analysis results are very fast. It is perfect for teams that need efficiency.",
    avatar: logo,
    stars: 4,
  },
  {
    name: "Jonathan W",
    position: "Freelance",
    text: "I write scientific content and whitepapers. With this AI assistant, I can digest hundreds of pages of research much faster. It's part of my workflow now.",
    avatar: logo,
    stars: 5,
  },
  {
    name: "Livia C.",
    position: "Data Scientist",
    text: "The interface is nice and clean, but some of my PDF files failed to process. Maybe the system is not yet stable for documents with more complex formats.",
    avatar: logo,
    stars: 3,
  },
];

export const TestimonialSLider = () => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <Carousel className="slide-caraousel-container w-full max-w-full relative">
      <div className="slider-container w-full h-auto flex-center overflow-hidden">
        <CarouselContent className="mx-[9%]  md:px-[1%]">
          
          {isLargeScreen && (
            <CarouselItem className="md:basis-1/2 xl:basis-1/3 opacity-0 pointer-events-none min-h-[1px]" />
          )}

          {testimonials.map((item, index) => (
            <FadeInOnScroll classname={'md:basis-1/2 xl:basis-1/3'} key={index} direction="zoom-in" delay={index * 0.2}>
              <CarouselItem
                key={index}
                className=" flex-center relative"
              >
                <div className="testimoni-user flex flex-col justify-between gap-5 max-sm:h-[260px] w-[300px] md:w-[400px] xl:w-[488px] lg:h-[206px] max-w-full rounded-xs border-[1px] border-[#313131] px-4 py-5">
                  <p className="w-[90%] lg:w-[370.6px] leading-[1.2]">
                    {item.text}
                  </p>

                  <div className="about-user flex-between w-full">
                    <div className="profile flex-center gap-2">
                      <div className="image w-10">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="rounded-full w-full"
                        />
                      </div>

                      <div className="name">
                        <p className="text-m lg:text-xl font-semibold">{item.name}</p>
                        <p className="text-ss lg:text-s">{item.position}</p>
                      </div>
                    </div>

                    <div className="reviews-star flex-center rounded-full w-[114px] h-[26px] bg-[#1D2325] border-[#415159] border-[1.8px]">
                      <div className="stars flex-center w-full gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <img
                            key={i}
                            src={starReview} // gambar bintang aktif
                            alt="star"
                            className={cn(
                              "w-[14px]",
                              (!item.stars || item.stars <= i) &&
                                "opacity-30 grayscale"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </FadeInOnScroll>
          ))}

          {isLargeScreen && (
            <CarouselItem className="md:basis-1/2 xl:basis-1/3 opacity-0 pointer-events-none min-h-[1px]" />
          )}
        </CarouselContent>
      </div>

      <FadeInOnScroll>
        <div className="buttons relative h-[100px] w-full">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </FadeInOnScroll>
    </Carousel>
  );
};
