import * as React from "react";

import { cn } from "@/lib/utils";
type InputProps = React.ComponentProps<"input"> & {
  legend?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, legend, ...props }, ref) => {
    return (
      <fieldset className="flex flex-col w-full">
        {legend && (
          <legend className="text-sm font-medium mb-1">{legend}</legend>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      </fieldset>
    );
  }
);
Input.displayName = "Input";

export { Input };
