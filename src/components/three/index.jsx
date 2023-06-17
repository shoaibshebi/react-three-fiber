import gsap from "gsap";
import * as THREE from "three";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

import { angleToRadians } from "../../utils/angle";
import { Car } from "./car";

export default function Three() {
  const ballRef = useRef();
  const orbitControlRef = useRef();

  useFrame((state) => {
    if (!!orbitControlRef.current) {
      const { x, y } = state.mouse;
      orbitControlRef.current.setAzimuthalAngle(angleToRadians(-(x * 90)));
      orbitControlRef.current.setPolarAngle(
        (y + 0.5) * angleToRadians(90 - 30)
      );
      orbitControlRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlRef.current) {
      console.log("orbitControlRef.current", orbitControlRef.current);
    }
  }, [orbitControlRef.current]);

  useEffect(() => {
    if (!!ballRef.current) {
      console.log("ballRef.current", ballRef.current);

      // Timeline
      const timeline = new gsap.timeline({ paused: true });

      timeline.to(ballRef.current.position, {
        x: 0.5,
        duration: 2,
        ease: "power2.inOut",
      });
      timeline.to(
        ballRef.current.position,
        {
          y: 0.5,
          duration: 1,
          ease: "bounce.out",
        },
        "<"
      );

      // //bounce the ball
      // const coefficient = 0.75;
      // for (let i = 0; i < 5; i++) {
      //   timeline.to(
      //     ballRef.current.position,
      //     {
      //       y: Math.pow(coefficient, i) * 1.5,
      //       duration: 0.2,
      //       ease: "power2.out",
      //     },
      //     ">"
      //   );

      //   timeline.to(
      //     ballRef.current.position,
      //     {
      //       y: 0.5,
      //       duration: 0.2,
      //       ease: "power2.in",
      //     },
      //     ">"
      //   );
      // }

      timeline.play();
    }
  }, [ballRef.current]);

  const angle = angleToRadians(90);
  return (
    <>
      <PerspectiveCamera makeDefault position={[1, 1, 10]} />
      <OrbitControls ref={orbitControlRef} />
      {/* ball */}
      <mesh position={[-2, 1.75, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <Car position={[2, 0.8, 0.2]} />

      {/* floor */}
      <mesh rotation={[-angle, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* ambient light */}
      <ambientLight args={["#fff", 1]} />

      {/* <pointLight   args={["#fff", 1]} position={[0, 2, 0]} /> */}
      <spotLight
        args={["#fff", 2, 7, angleToRadians(30), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />

      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#1ea3d8" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}
