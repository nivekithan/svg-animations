import { AnimationContainer } from "../ui/animationContainer";

export function AlignIcon() {
  return (
    <AnimationContainer>
      <button className="w-[96px] aspect-square bg-gray-800 border border-900 rounded-md p-3 group">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="100%">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
          >
            <line x1="4" y1="4" x2="4" y2="20" />
            <g className="group-hover:translate-x-[3px] transition-transform duration-200">
              <line x1="8" y1="12" x2="20" y2="12" />
              <polyline points="16,8 20,12 16,16" />
            </g>
          </g>
        </svg>
      </button>
    </AnimationContainer>
  );
}
