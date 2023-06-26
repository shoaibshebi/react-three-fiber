import { Parallax } from "@react-spring/parallax";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppleVisionPro from "./scrollPages/AppleVisionPro/AppleVisionPro.jsx";
import BezierPath from "./scrollPages/BezierPath/BezierPath.jsx";
import FireWatchParallax from "./scrollPages/FireWatchParallax/FireWatchParallax.jsx";
import Parallax2 from "./scrollPages/Parallax2/Parallax2.jsx";
import Rabit from "./scrollPages/Rabit.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Rabit /> */}
    {/* <FireWatchParallax /> */}
    {/* <Parallax2 /> */}
    {/* <AppleVisionPro /> */}
    <BezierPath />
  </React.StrictMode>
);
