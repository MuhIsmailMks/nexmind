// src/components/ui/section.jsx 
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva(
  "w-full relative z-10 flex-wrap max-w-full lg:max-w-[2000px] ",
  {
    variants: {
      variant: {
        bgblue: "bg-blue-500",
      },
      layout: {
        flex: "flex  ",
        flexcolumn: "flex flex-col items-center", 
        centered: "flex justify-center items-center",
      },
      gap: {
        none: "",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-10", // 40px
        mobilemd: "max-xl:gap-6",
      },
    },
    defaultVariants: {
      layout: "flex",
      gap: "none",
    },
  }
);

function Section({id, className, layout, gap, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "section";

  return (
    <Comp
      data-slot="section"
      id={id}
      className={cn(sectionVariants({ layout, gap, className }))}
      {...props}
    />
  );
}

export { Section, sectionVariants };
