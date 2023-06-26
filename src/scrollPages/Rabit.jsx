import React, { useEffect, useState } from "react";

import rabit1 from "../assets/images/example_imagesequence_01.png";
import rabit2 from "../assets/images/example_imagesequence_02.png";
import rabit3 from "../assets/images/example_imagesequence_03.png";
import rabit4 from "../assets/images/example_imagesequence_04.png";
import rabit5 from "../assets/images/example_imagesequence_05.png";
import rabit6 from "../assets/images/example_imagesequence_06.png";
import rabit7 from "../assets/images/example_imagesequence_07.png";

export default function Rabit() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rabitImages = [rabit1, rabit2, rabit3, rabit4, rabit5, rabit6, rabit7];

  const rabitScrollCalc = () => {
    const index = Math.floor(scrollY / 10) % rabitImages.length; // 100 / 100  = 1 % 7 = 1
    return rabitImages[index];
  };

  return (
    <div className="bg-[#0F172A] h-[2000px] relative">
      <img
        src={rabitScrollCalc()}
        alt="rabit"
        className="w-[300px] h-[300px] fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
      />
    </div>
  );
}
