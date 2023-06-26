import React, { useEffect, useState } from "react";
import { appleVRImages } from "../../utils/importImgs";

export default function AppleVisionPro() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const appleVRScrollCalc = () => {
    const index = Math.floor(scrollY / 10) % appleVRImages.length; // 100 / 10  = 1 % 200 = 1
    console.log(index);
    return appleVRImages[index];
  };

  const header = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"];
  const footer = [
    "Privacy policy",
    "Terms of use",
    "Sales and refund",
    "Legal",
    "Site map",
  ];

  return (
    <div className="bg-[#F5F5F7] h-[2900px] relative ">
      <div className="bg-[#000000] h-[60px] w-[100%] fixed top-0 left-0 z-50">
        <div className="flex justify-around items-center h-[60px] w-[100%] px-[20px]">
          <div className="flex items-center">
            <img
              src="https://cdn.worldvectorlogo.com/logos/apple.svg"
              alt="apple"
              className="w-[100px] h-[30px] cursor-pointer"
            />
            {header.map((item, index) => (
              <div className="flex items-center ml-[20px]">
                <p className="text-[#FFFFFF] text-[14px] font-normal">
                  {" "}
                  {item}{" "}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <p className="text-[#FFFFFF] text-[14px] font-normal flex">
              Search
            </p>
            <p className="text-[#FFFFFF] text-[14px] font-normal ml-[20px]">
              Shop
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] h-[60px] w-[100%] fixed top-14 left-0 z-50">
        <div className="flex justify-around items-center h-[60px] w-[100%] px-[20px]">
          <div className="flex items-center font-bold">Vison Pro</div>
          <div className="flex items-center button ">
            <button className="text-[#000] text-[14px]  font-normal flex bg-white rounded-full px-3 py-1">
              Notify me
            </button>
          </div>
        </div>
      </div>
      <img
        src={appleVRScrollCalc()}
        alt="appleVR"
        className="w-auto h-[90%]  fixed top-[52%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
      />

      <div className="bg-[#e2e2e3] h-[40px] w-full fixed bottom-0 left-0 z-50 px-24">
        <div className="flex justify-around items-center h-[40px]  px-[20px]">
          <div className="flex items-center">
            <p className="text-[#000] text-[14px] font-normal">
              &copy; 2023 Apple Inc. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            {footer.map((item) => (
              <p className="text-[#000] text-[14px] font-normal mx-2">{item}</p>
            ))}
          </div>
          <div className="flex items-center">
            <p className="text-[#000] text-[14px] font-normal">United States</p>
          </div>
        </div>
      </div>
    </div>
  );
}
