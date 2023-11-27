"use client";

import { useKeyPress } from "@react-typed-hooks/use-key-press";

import { Key } from "../Key";
import { Slider } from "../Slider";

export const Controller = () => {
  const aKey = useKeyPress({ targetKey: "a" });
  const AKey = useKeyPress({ targetKey: "A" });
  const sKey = useKeyPress({ targetKey: "s" });
  const SKey = useKeyPress({ targetKey: "S" });
  const dKey = useKeyPress({ targetKey: "d" });
  const DKey = useKeyPress({ targetKey: "D" });
  const enterKey = useKeyPress({ targetKey: "Enter" });
  const spaceKey = useKeyPress({ targetKey: " " });

  return (
    <div className="flex gap-4 bg-foreground p-4 rounded-lg border-r-8 border-b-8 border-foreground-dark">
      <div className="flex flex-col gap-2">
        <Key active={aKey || AKey} letter="a" />
        <Key active={sKey || SKey} letter="s" />
        <Key active={dKey || DKey} letter="d" />
        <Key active={enterKey || spaceKey} start letter=">" />
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};
