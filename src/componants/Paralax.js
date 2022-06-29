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
            backgroundColor: "blue",
          }}
        >
          <p style={{ fontSize: `100px` }}>Fun With Parallax</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.3}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {[...Array(5)].map(() => {
            return (
              <>
                <div
                  style={{
                    backgroundColor: "orange",
                    width: `50px`,
                    height: `50px`,
                    marginLeft: `${Math.random() * (Math.random() * 50)}%`,
                    marginTop: `${Math.random() * (Math.random() * 75) * 3}%`,
                    opacity: `${Math.random() * Math.random()}`,
                    position: "relative",
                    zIndex: -1000,
                  }}
                ></div>
              </>
            );
          })}
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.6}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {[...Array(5)].map(() => {
            return (
              <>
                <div
                  style={{
                    backgroundColor: "red",
                    width: `50px`,
                    height: `50px`,
                    marginLeft: `${Math.random() * (Math.random() * 50)}%`,
                    marginTop: `${Math.random() * (Math.random() * 50)}%`,
                    opacity: `${Math.random()}`,
                    position: "relative",
                  }}
                ></div>
              </>
            );
          })}
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          speed={5}
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            color: "white",
            marginLeft: `15%`,
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
              alignItems: "center",
            }}
          >
            <p>Test 2</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: `10%`
          }}
        >
        <p style={{minWidth: `200px`}}>YOLO SWAG</p>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
