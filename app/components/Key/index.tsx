import React from "react";
import classNames from "classnames";
import useSound from "use-sound";

import { ControlValuesContext } from "@/app/page";

import type { OptionLetters } from "@/app/utils/types";

interface ButtonProps {
  start?: boolean;
  letter: OptionLetters;
  active?: boolean;
}

export const Key = ({ start, active, letter, ...props }: ButtonProps) => {
  const { setActiveKey, setSliderPosition, setEnabled } =
    React.useContext(ControlValuesContext);

  const [play] = useSound("/sounds/key.mp3", { volume: 0.25 });

  React.useEffect(() => {
    if (active) {
      handleClick();
    }
  }, [active]);

  function handleClick(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (e) e.preventDefault();

    if (!letter) return;

    if (letter === ">") {
      setEnabled(false);
      setSliderPosition({ a: 0, s: 0, d: 0 });
      return;
    }

    setActiveKey(letter);
    setEnabled(true);

    play();
  }

  return (
    <div className="w-20 h-20 pr-0.5 pb-0.5 aspect-square bg-background rounded-sm flex justify-end items-end">
      <button
        type="button"
        onClick={handleClick}
        className={classNames(
          "flex justify-start items-start p-2 text-2xl w-[98%] outline-none h-auto aspect-square bg-primary-default rounded-lg active:border-r-0 active:border-b-0 active:border-t-4 active:border-l-4 active:border-background",
          start && "bg-secondary-default leading-3 text-5xl",
          start && !active && "border-secondary-dark",
          active
            ? "border-r-0 border-b-0 border-l-4 border-t-4 border-background"
            : "border-r-4 border-b-4 border-primary-dark"
        )}
        {...props}
      >
        {letter.toUpperCase()}
      </button>
    </div>
  );
};
