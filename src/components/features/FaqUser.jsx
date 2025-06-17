import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { textVariants } from "../ui/text";
import { min, plus } from "../../assets";

 

export function FaqUser({ faqList }) {
  return (
    <Accordion
      type="single"
      // {...(true && {})}
      
      collapsible
      className="faq-accordion w-full flex flex-col gap-5 "
      defaultValue={["item-1"]}
    >
      {faqList.map((item) => (
        <AccordionItem key={item.id} value={item.id} className={'faq-content border-2 border-[#363A56CC] p-4 rounded-xl '}>
          <AccordionTrigger className="faq-btn cursor-pointer w-full justify-between items-center gap-4 after:content-none">
            <p className={`font-anybody text-left w-[90%] ${textVariants({ intent:'largetext', leading:'md' })}`} >{item.title}</p>
              <span className="icon w-7"> 
                <span className="plus-icon">
                  <img src={plus} alt="min icon" className="w-full"/>
                </span>
                <span className="minus-icon">
                  <img src={min} alt="plus icon" className="w-full"/>
                </span>
              </span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance overflow-hidden transition-all duration-1000 ease-in-out">
            {item.content.map((para, idx) => (
              <p key={idx} className="text-s leading-[1.4]">{para}</p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
