import { cva } from "class-variance-authority"; 

export const textVariants = cva(" text-center max-w-full break-words ", {
  variants: {
    intent: {
      heroTitle: "text-[40px] md:text-[70px] lg:text-[120px] font-bold",
      heroTitle2: "text-smalltitle md:text-[50px] lg:text-[100px] font-bold",
      title: "text-smalltitle lg:text-title font-semibold w-[690px] font-anybody",
      subtitle: "text-l lg:text-xl font-semibold",
      body: "text-m text-muted-foreground",
      xlargetext: "text-l md:text-xxl",
      largetext: "text-m md:text-xl",
      mediumtext: "text-s md:text-l",
      smalltext: "text-ss md:text-s",
    },
    leading: {
      default:'leading-[1]',
      sm:'leading-5',
      md:'leading-6.5',
      lg:'leading-8',
      xl:'leading-10',
    },
    size: {
      default: '',
      commonText: 'w-[1000px]'
    }
  },
  defaultVariants: {
    intent: "body",
    leading:'default',
    size:'default',
  },
});

// {`${textVariants({ intent:'largetext' })}`}