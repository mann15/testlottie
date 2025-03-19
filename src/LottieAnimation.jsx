import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "./assets/lottieAnimation.json";

const LottieAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const lottieRef = useRef(null);

  // Use effect to control the animation
  React.useEffect(() => {
    if (!lottieRef.current) return;

    if (isHovered) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [isHovered]);

  return (
    <div
      style={{ width: "800px", height: "200px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={false}
      />
    </div>
  );
};

export default LottieAnimation;
