import { AnimationContainer } from "../ui/animationContainer";

export function PlusMinusDetail() {
  return (
    <AnimationContainer>
      <details className="w-[300px] rounded-md border border-gray-900 p-3 bg-gray-800 group">
        <summary className="list-none font-semibold -m-3 p-3 flex items-center gap-[8px] group-open:mb-3 group-open:border-b group-open:border-dashed group-open:border-gray-900">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="20">
            <g
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line
                x1="12"
                y1="4"
                x2="12"
                y2="20"
                className="group-open:rotate-90 origin-[12px_12px] transition-transform duration-200"
              />
              <line x1="4" y1="12" x2="20" y2="12" />
            </g>
          </svg>
          <span>Read more</span>
        </summary>
        Something interesting here!
      </details>
    </AnimationContainer>
  );
}
