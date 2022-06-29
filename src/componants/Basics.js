import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Basics() {
  const [paus, setPause] = useState(false);
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    onRest: () => setFlip(!flip),
    pause: paus
  });

  const handlePauseClick = () => {
    setPause(!paus);
  };

  return (
    <>
      <button onClick={handlePauseClick}>Pause</button>
      <animated.div style={props}>I will fade in</animated.div>
      <hr style={{width: "80%"}}/>
    </>
  );
}
