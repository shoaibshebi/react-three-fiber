import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Three from "./components/three";

function App() {
  return (
    <>
      <Canvas id="three-canvas-container" style={{ height: "100vh" }} shadows>
        <Html></Html>
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
