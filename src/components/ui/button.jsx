import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils" 

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center whitespace-nowrap  transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-full max-w-full",
  {
    variants: {
      variant: {
        default:
          " ",
        primary:
          "bg-primary text-white",
        outline:
          "border-2 border-primary",
        secondary:
          "bg-red-500 text-secondary-foreground shadow-xs hover:bg-secondary/80", 
        link: "text-primary underline-offset-4 hover:underline", 
        bulat: "rounded-[100px] border-4 border-blue-500 bg-transparent text-black hover:rotate-45",
      },
      size: {
        default: "md:h-9 md:px-4 lg:py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-[45px] max-md:px-4 md:w-[225px]",
        icon: "size-9",
      },
      text: {
        s:'text-ss',
        sm:'text-s',
        md:'text-s lg:text-m',
        lg:'text-xl',
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default", 
    },
  }
)

function Button({
  className,
  variant,
  size,
  text, 
  asChild = false, 
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, text, className }))}
      {...props}/>
  );
}

export { Button, buttonVariants }
