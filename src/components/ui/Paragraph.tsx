import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

const paragraphVariants = cva("w-full px-4 py-2", {
  variants: {
    variant: {
      default: "text-gray-900 dark:text-gray-100",
      success: "text-green-600 bg-green-100 dark:bg-green-900/30",
      warning: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30",
      error: "text-red-600 bg-red-100 dark:bg-red-900/30",
    },

    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ParagraphProps = React.ComponentProps<"p"> &
  VariantProps<typeof paragraphVariants> & {
    asChild?: boolean;
  };

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "p";

    return (
      <Comp
        // data-slot="paragraph"
        data-variant={variant}
        data-size={size}
        ref={ref}
        className={cn(paragraphVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Paragraph.displayName = "Paragraph";
