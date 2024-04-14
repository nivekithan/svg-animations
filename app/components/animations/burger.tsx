import { useState } from "react";
import { AnimationContainer } from "../ui/animationContainer";
import { cn } from "~/lib/utils/cn.ts";

export function BurgerIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimationContainer>
      <button
        aria-pressed={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 p-4 bg-gray-50 text-black rounded-[50%] group"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" width="100%">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          >
            <line
              x1="4"
              y1="7"
              x2="20"
              y2="7"
              className={cn([
                "transition-[translate,rotate] duration-200 origin-[12px_7px] [transition-delay:0.2s,0s]",
                isOpen &&
                "[translate:0px_5px] [rotate:45deg] [transition-delay:0s,0.2s]",
              ])}
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              className={cn([
                "transition-[translate,rotate] duration-200 origin-[12px_12px] [transition-delay:0.2s,0s]",
                isOpen && "[rotate:45deg] [transition-delay:0s,0.2s]",
              ])}
            />
            <line
              x1="4"
              y1="17"
              x2="20"
              y2="17"
              className={cn([
                "transition-[translate,rotate] duration-200 origin-[12px_17px] [transition-delay:0.2s,0s]",
                isOpen &&
                "[translate:0px_-5px] [rotate:-45deg] [transition-delay:0s,0.2s]",
              ])}
            />
          </g>
        </svg>
      </button>
    </AnimationContainer>
  );
}
