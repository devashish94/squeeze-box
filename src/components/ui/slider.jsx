import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils.js";
import { useEffect, useState } from "react";

const Slider = React.forwardRef(({ className, ...props }, ref) => {
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    console.log(sliderValue);
  }, [sliderValue]);

  return (
    <SliderPrimitive.Root
      ref={ref}
      value={[sliderValue]}
      onValueChange={() => setSliderValue()}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-blue-100">
        <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border-2 border-blue-500 bg-blue-500 active:scale-110 transition-all outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
