import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Paralax() {
  return (
    <>
      <Parallax pages={3} style={{ top: `0`, left: `0` }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue"
          }}
        >
          <p>test 1</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#ff6d6d" }}
        />
        <ParallaxLayer
          sticky={{start: 1, end: 2}}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#46e891",
              borderRadius: 16,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <p style={{ zIndex: 900 }}>Test 2</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
