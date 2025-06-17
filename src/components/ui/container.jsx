// src/components/ui/container.jsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva(
    "w-auto max-w-full xl:max-w-[2000px] flex-wrap",
  {
    variants: {
      variant: {
        default: 'relative',  
        background: 'w-full h-full absolute z-0 left-0 top-0 ',
      },
      layout: {
        flex: "flex",
        flexcol: "flex flex-col",
        flexcolcenter: "flex flex-col items-center",
        grid: "grid",
        stacked: "flex flex-col",
        centered: "flex justify-center items-center",
        between: "flex flex-wrap justify-between items-center",
      },
      padding: {
        none: "",
        sm: "p-3", // 12px
        md: "p-4", // 16x
        lg: "p-8", // 32px
        xsm: "px-3", // 12px
        xmd: "px-4", // 16x
        xlg: "px-8", // 32px
      },
      gap: {
        none: "",
        sm: "gap-3", // 12px
        md: "gap-6",  // 24px
        lg: "gap-6 lg:gap-10", // 40px
        xlg: "gap-12", // 48px
      },
    },
    defaultVariants: {
      variant:'default',
      layout: "flex",
      padding: "none",
    },
  }
);

function Container({ className, variant, layout, gap , padding, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="container"
      className={cn(containerVariants({ variant, layout, padding, className, gap }))}
      {...props}
    />
  );
}

export { Container, containerVariants };
