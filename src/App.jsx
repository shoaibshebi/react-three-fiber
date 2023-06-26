import { lazy, Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Rabit from "./scrollPages/Rabit";

const Three = lazy(() => import("./components/Three"));
const FancyCar = lazy(() => import("./pages/FancyCar"));

const ReactFiber = () => {
  return (
    <>
      <Canvas id="three-canvas-container" style={{ height: "100vh" }} shadows>
        <Suspense fallback={null}>
          {/* <Three /> */}
          {/* <FancyCar /> */}
        </Suspense>
      </Canvas>
    </>
  );
};

const ReactScroll = () => {
  return (
    <>
      <Rabit />
    </>
  );
};

function App() {
  return (
    <>
      {/* <ReactFiber /> */}
      <ReactScroll />
    </>
  );
}

export default App;
