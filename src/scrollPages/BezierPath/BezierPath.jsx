import { TimelineMax, TweenMax } from "gsap";
import ScrollMagic from "scrollmagic";
import React, { useRef } from "react";
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

import planeImg from "../../assets/example_bezier.png";

export default function BezierPath() {
  const planeRef = useRef(null);
  let flightpath = {
    entry: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 100, y: -20 },
        { x: 300, y: 10 },
      ],
    },
    looping: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 510, y: 60 },
        { x: 620, y: -60 },
        { x: 500, y: -100 },
        { x: 380, y: 20 },
        { x: 500, y: 60 },
        { x: 580, y: 20 },
        { x: 620, y: 15 },
      ],
    },
    leave: {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 660, y: 20 },
        { x: 800, y: 130 },
        { x: window.width + 300, y: -100 },
      ],
    },
  };
  // init controller
  let controller = new ScrollMagic.Controller();

  // create tween
  let tween = new TimelineMax()
    .add(
      TweenMax.to(planeRef.current, 1.2, {
        css: { bezier: flightpath.entry },
        ease: "Power1.easeInOut",
      })
    )
    .add(
      TweenMax.to(planeRef.current, 2, {
        css: { bezier: flightpath.looping },
        ease: "Power1.easeInOut",
      })
    )
    .add(
      TweenMax.to(planeRef.current, 1, {
        css: { bezier: flightpath.leave },
        ease: "Power1.easeInOut",
      })
    );

  // build scene
  let scene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 500,
    offset: 100,
  })
    .setPin("#target")
    .setTween(tween)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  return (
    <section class="demo h-[100vh]" id="bezier">
      <div class="spacer s2"></div>
      <div class="spacer s0" id="trigger"></div>
      <div id="target">
        <img ref={planeRef} id="plane" src={planeImg} />
      </div>
      <div class="spacer s2"></div>
    </section>
  );
}
