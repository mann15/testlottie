import React from "react";
import Lottie from "lottie-react";
import animationData from "./assets/lottieAnimation.json"; // the path to your animation JSON file

const LottieAnimation = () => {
  return (
    <div style={{ width: "800px", height: "200px" }}>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default LottieAnimation;
