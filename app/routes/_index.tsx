import type { MetaFunction } from "@remix-run/cloudflare";
import { AlignIcon } from "~/components/animations/alignIcon";
import { BurgerIcon } from "~/components/animations/burger";
import { PlusMinusDetail } from "~/components/animations/plusMinusDetail";
import { TrashCan } from "~/components/animations/trashcan";
import { TrashCan2 } from "~/components/animations/trashcan2";

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
      <div className="flex flex-wrap gap-8 px-10">
        <TrashCan />
        <AlignIcon />
        <TrashCan2 />
        <PlusMinusDetail />
        <BurgerIcon />
      </div>
    </main>
  );
}
