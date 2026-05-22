import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

const buttonVariants = cva("cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors", {
  variants: {
    variant: {
      default: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
      outLine:
        "bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-100",
      denger: "bg-red-600 text-white hover:bg-red-700",
      success: "bg-green-600 text-white hover:bg-green-700",
    },
    size: {
      default: "py-2 px-4",
      sm: "py-1 px-2 text-sm",
      md: "py-2 px-4 text-base",
      lg: "py-3 px-6 text-lg",
      xl: "py-4 px-8 text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
  }) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        data-slot="paragraph"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
