import * as React from "react";

import { cn } from "@/lib/utils";
type InputProps = React.ComponentProps<"input"> & {
  legend?: string;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, legend, error, ...props }, ref) => {
    return (
      <fieldset className="flex flex-col w-full ">
        {legend && (
          <legend className="text-sm  text-gray-60000 font-medium mb-1">
            {legend}
          </legend>
        )}
        <input
          type={type}
          className={cn(
            "flex text-gray-400 h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            error

              ? "border-red-800 focus-visible:ring-red-500"
              : "border-input focus-visible:ring-blue-800",
            className
          )}
          ref={ref}
          {...props}
        />
             {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
      </fieldset>
    );
  }
);
Input.displayName = "Input";

export { Input };
