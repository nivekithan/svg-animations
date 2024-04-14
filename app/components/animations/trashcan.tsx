import { AnimationContainer } from "../ui/animationContainer";

export function TrashCan() {
  return (
    <AnimationContainer>
      <div>
        <button
          className={`
                text-xl font-semibold py-2 pr-3 pl-5 flex items-center justify-center rounded-full gap-x-[4px] bg-[rgb(127,29,29)]
                border-2 border-[rgb(153,27,27)] text-white group 
                `}
        >
          <span>Delete</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="32">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            >
              <g className="group-hover:translate-y-[2px] transition-transform duration-200">
                <polygon points="6 8, 7 20, 17 20, 18 8" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <line x1="10" y1="11" x2="10" y2="17" />
              </g>
              <g className="group-hover:-translate-y-[2px] transition-transform duration-200">
                <line x1="5" y1="8" x2="19" y2="8" />
                <rect width="4" height="2.5" x="10" y="5.5" />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </AnimationContainer>
  );
}
