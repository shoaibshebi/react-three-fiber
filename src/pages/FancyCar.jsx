import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Ground from "./Ground";
import { Car } from "../components/three/car";
import Rings from "./Rings";
import { Boxes } from "./Boxes";

const CarShowroom = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault position={[3, 2, 5]} fov={50} />

      <color args={[0, 0, 0]} attach="background" />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car position={[0, 1, 0]} rotation={[0, 0, 0]} />
          </>
        )}
      </CubeCamera>

      <spotLight
        color={[1, 0.25, 0.7]}
        position={[5, 5, 0]}
        angle={0.6}
        penumbra={0.5}
        intensity={1.5}
        castShadow
        shadow-biased={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        position={[-5, 5, 0]}
        angle={0.6}
        penumbra={0.5}
        intensity={2}
        castShadow
        shadow-biased={-0.0001}
      />

      <Rings />
      <Boxes />
    </>
  );
};

export default function FancyCar() {
  return (
    <>
      <CarShowroom />
      <Ground />
    </>
  );
}
