import React, { useState, useRef, useEffect } from "react";
import { min, plus } from "../../assets";
import { textVariants } from "../ui/text";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="faq-content border-2 border-[#363A56CC] p-4 rounded-xl w-full">
      <button
        onClick={onToggle}
        className="w-full text-left font-semibold text-lg flex justify-between items-center cursor-pointer py-4"
      >
        <span
          className={`font-anybody text-left w-[90%] ${textVariants({
            intent: "largetext",
            leading: "md",
          })}`}
        >
          {title}
        </span>
        <span className="w-7">
          {isOpen ? (
            <span className="min-icon">
              <img src={min} alt="plus icon" className="w-full" />
            </span>
          ) : (
            <span className="plus-icon">
              <img src={plus} alt="min icon" className="w-full" />
            </span>
          )}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          height: height,
          overflow: "hidden",
          transition: "height 300ms ease",
        }}
      >
        <div className="mt-2 px-1 py-1">
          {content.map((para, i) => (
            <p key={i} className="text-s leading-[1.4]">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const FaqAccordion = ({ faqList }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-container faq-accordion max-w-2xl mx-auto flex-center flex-col gap-4">
      {faqList.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FaqAccordion;
