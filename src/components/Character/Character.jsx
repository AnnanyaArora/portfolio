import React from "react";
import Lottie from "lottie-react";
import developerAnim from "../../lotties/developer.json";

const Character = () => {
  return (
    <div className="w-40 h-40">
      <Lottie animationData={developerAnim} loop={true} />
    </div>
  );
};

export default Character;
