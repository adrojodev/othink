import React from "react";
import { motion } from "framer-motion";

import { ControlValuesContext } from "@/app/page";

export const Canvas = () => {
  const { sliderPosition } = React.useContext(ControlValuesContext);

  React.useEffect(() => {
    console.log(sliderPosition);
  }, [sliderPosition]);

  return (
    <div className="relative flex justify-center items-center overflow-hidden bg-red-400 w-2/3 aspect-video">
      <motion.div
        className="absolute w-[120%] h-[120%] bg-center bg-repeat"
        animate={{
          rotateZ: sliderPosition.a,
        }}
        style={{
          backgroundSize: `100% auto`,
          filter: `blur(${sliderPosition.d}%)`,
          backgroundImage: `url(${"https://tripspi-prod.imgix.net/blogs/60ewipugMR/Pfiv0-david-edelstein-N4DbvTUDikw-unsplash.jpg?ixlib=js-2.3.2&w=1024&auto=compress&fit=crop&s=919afc22d09ca569980b1c99fd2af23d"})`,
        }}
      />
    </div>
  );
};
