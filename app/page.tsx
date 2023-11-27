"use client";

import React from "react";

import { Controller } from "./components/Controller";
import { Canvas } from "./components/Canvas";

import type { OptionLetters, SliderValue } from "./utils/types";

export const ControlValuesContext = React.createContext({
  sliderPosition: { a: 0, s: 0, d: 0 },
  setSliderPosition: (value: SliderValue) => {},
  activeKey: "" as OptionLetters,
  setActiveKey: (key: OptionLetters) => {},
  enabled: false,
  setEnabled: (value: boolean) => {},
});

export default function Home() {
  const [enabled, setEnabled] = React.useState(false);
  const [sliderPosition, setSliderPosition] = React.useState<SliderValue>({
    a: 0,
    s: 0,
    d: 0,
  });
  const [activeKey, setActiveKey] = React.useState<OptionLetters>("");

  React.useEffect(() => {
    console.log(sliderPosition);
  }, [sliderPosition]);

  return (
    <main className="flex gap-10 justify-center items-center min-h-screen">
      <ControlValuesContext.Provider
        value={{
          sliderPosition,
          setSliderPosition,
          activeKey,
          setActiveKey,
          enabled,
          setEnabled,
        }}
      >
        <Controller />
        <Canvas />
      </ControlValuesContext.Provider>
    </main>
  );
}
