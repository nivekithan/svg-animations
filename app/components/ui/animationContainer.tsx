import React from "react";

export function AnimationContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-64 h-52 grid place-items-center rounded-md bg-slate-900 p-9">
      <div>{children}</div>
    </div>
  );
}
