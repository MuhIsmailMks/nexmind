import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { logo, starReview } from "../../assets";
import { useIsLargeScreen } from "../common/EmptySpaceSlide";



const testimonials = [
  {
    name: "Kevin R",
    position: "Academic Researcher",
    text: "As a lecturer and researcher, I am greatly helped by the document-based summarization and Q&A features. This is not just an AI, but a truly intelligent research assistant.",
    avatar: logo,
    stars: 5,
  },
  {
    name: "Anna S",
    position: "Data Scientist",
    text: "I use this tool daily in my research workflow. It helps me find key insights faster and more accurately.",
    avatar: logo,
    stars: 4,
  },
  {
    name: "Anna S",
    position: "Data Scientist",
    text: "I use this tool daily in my research workflow. It helps me find key insights faster and more accurately.",
    avatar: logo,
    stars: 3,
  },
  {
    name: "Anna S",
    position: "Data Scientist",
    text: "I use this tool daily in my research workflow. It helps me find key insights faster and more accurately.",
    avatar: logo,
    stars: 5,
  },
  {
    name: "Anna S",
    position: "Data Scientist",
    text: "I use this tool daily in my research workflow. It helps me find key insights faster and more accurately.",
    avatar: logo,
    stars: 5,
  },
];

export const TestimonialSLider = () => {
  const isLargeScreen = useIsLargeScreen()
  return (
    <Carousel className="w-full max-w-full  ">
      <div className="slider-container w-full h-auto flex-center overflow-hidden">
        <CarouselContent className="lg:px-[1%]"> 
 
        {isLargeScreen && (
          <CarouselItem className="md:basis-1/2 xl:basis-1/3 opacity-0 pointer-events-none min-h-[1px]" />
        )}  

          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 xl:basis-1/3 flex-center relative"
            >
              <div className="testimoni-user flex flex-col justify-between gap-5 w-[90%] xl:w-[488px] lg:h-[206px] rounded-xs border-[1px] border-[#313131] px-4 py-5">
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
                      <p className="text-xl font-semibold">{item.name}</p>
                      <p className="text-s">{item.position}</p>
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
                          (!item.stars || item.stars <= i) && "opacity-30 grayscale"
                        )}
                      /> ))}
                      </div>

                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
  
          {isLargeScreen && (
          <CarouselItem className="md:basis-1/2 xl:basis-1/3 opacity-0 pointer-events-none min-h-[1px]" />
        )}  

        </CarouselContent>
      </div>

      <div className="buttons relative h-[100px] w-full">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};
