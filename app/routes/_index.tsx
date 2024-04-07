import type { MetaFunction } from "@remix-run/cloudflare";
import { TrashCan } from "~/components/animations/trashcan";
import { AnimationContainer } from "~/components/ui/animationContainer";

export const meta: MetaFunction = () => {
  return [
    { title: "SVG Animations" },
    {
      name: "description",
      content: "Collections of svg animations I have made",
    },
  ];
};

export default function Index() {
  return (
    <main>
      <div className="min-h-60 grid place-items-center ">
        <h1 className="text-3xl font-semibold">SVG Animations</h1>
      </div>
      <div className="flex flex-wrap gap-4 px-10">
        <AnimationContainer>
          <TrashCan />
        </AnimationContainer>
      </div>
    </main>
  );
}
