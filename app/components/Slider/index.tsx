"use client";

import React from "react";
import {
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
} from "framer-motion";
import classNames from "classnames";

import { ControlValuesContext } from "@/app/page";

import type { OptionLetters } from "@/app/utils/types";

export const Slider = () => {
  const { setSliderPosition, sliderPosition, activeKey, enabled } =
    React.useContext(ControlValuesContext);
  const sliderTrack = React.useRef<HTMLDivElement>(null);

  const sliderTrackHeight = React.useMemo(() => {
    if (sliderTrack.current) {
      return Math.round(sliderTrack.current.clientHeight - 46);
    }

    return 0;
  }, [sliderTrack.current]);

  const handleY = useMotionValue(0);
  const progressScaleY = useTransform(
    handleY,
    [0, sliderTrackHeight],
    [0, 100]
  );

  const dragControls = useDragControls();

  const colors: Partial<Record<OptionLetters, string>> = {
    a: "border-rose-500",
    s: "border-indigo-500",
    d: "border-emerald-500",
    ">": "border-secondary-default",
  };

  function handleScroll(e: React.WheelEvent<HTMLDivElement>) {
    if (!enabled) return;

    const currentValue = progressScaleY.get();

    if (e.deltaY > 0 && currentValue < 100) {
      handleY.set(handleY.get() + 5);
    }

    if (e.deltaY < 0 && currentValue > 0) {
      handleY.set(handleY.get() - 5);
    }

    handleDrag();
  }

  function handleDrag() {
    const newSliderPosition = sliderPosition;

    if (activeKey === ">" || activeKey === "") return;

    newSliderPosition[activeKey] = handleY.get();

    setSliderPosition(newSliderPosition);
  }

  React.useEffect(() => {
    const newSliderPosition = sliderPosition;

    if (activeKey === "") return;

    if (activeKey === ">") {
      handleY.set(0);
      return;
    }

    handleY.set(newSliderPosition[activeKey] ?? 0);
  }, [activeKey]);

  return (
    <div
      onWheel={handleScroll}
      className="flex h-full bg px-10 py-4 rounded-lg bg-primary-default border-r-4 border-b-4 border-primary-dark"
    >
      <div
        ref={sliderTrack}
        className="relative flex justify-center bg w-3 h-full bg-black rounded-full border-l-2 border-t-2 border-primary-dark"
      >
        <motion.div
          onDrag={handleDrag}
          dragConstraints={{ top: 0, bottom: sliderTrackHeight }}
          drag={enabled ? "y" : false}
          dragMomentum={false}
          dragElastic={0}
          dragControls={dragControls}
          style={{ y: handleY }}
          className={classNames(
            "absolute w-10 -ml-2 h-auto aspect-square rounded-full border-4",
            colors[activeKey] ?? "border-secondary-default",
            enabled
              ? "bg-primary-default shadow-[3px_3px_0px_rgb(215,204,182)] cursor-ns-resize"
              : "bg-primary-dark shadow-[3px_3px_0px_rgb(164,154,135)] cursor-not-allowed border-stone-400"
          )}
        />
      </div>
    </div>
  );
};
