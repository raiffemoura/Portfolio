"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import whatsapp from "../_assets/sky-mountain.jpg";
import portfolios from "../_assets/portfol-ios.png";
import ifoodfy from "../_assets/ifoodfy.jpg";
import Image from "next/image";

const HomeCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseMove={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(false)}
          className="z-10"
        >
          {/* esquerda em baixo */}
          <Image
            src={ifoodfy}
            alt="whatsapp"
            className={`absolute h-52 w-52 rounded-lg ${isHovered ? "slide-in" : "slide-out"} `}
          />
          {/* meio em baixo */}{" "}
          <Image
            src={whatsapp}
            alt="whatsapp"
            className={`absolute h-52 w-52 rounded-lg ${isHovered ? "slide-in2" : "slide-out2"} `}
          />
          {/* esquerda em cima */}
          <Image
            src={portfolios}
            alt="whatsapp"
            className={`absolute h-52 w-52 rounded-lg ${isHovered ? "slide-in3" : "slide-out3"} `}
          />
          {/* direta em cima */}
          <Image
            src={whatsapp}
            alt="whatsapp"
            className={`absolute h-52 w-52 rounded-lg ${isHovered ? "slide-in4" : "slide-out4"} `}
          />
          {/* direta em baixo */}
          <Image
            src={whatsapp}
            alt="whatsapp"
            className={`absolute h-52 w-52 rounded-lg ${isHovered ? "slide-in5" : "slide-out5"} `}
          />
        </div>
        <Card
          onMouseEnter={() => setIsHovered(true)}
          onMouseMove={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          // onMouseLeave={() => setIsHovered(false)}
          className="relative z-20 flex h-52 w-[30rem] flex-col items-center justify-between rounded-3xl border-none bg-[#000000] bg-opacity-30 py-4 text-white backdrop-blur-lg"
        >
          <div className="flex w-full flex-row items-center justify-center text-3xl">
            <h1>Hey, I&apos;m </h1>
            <Button className="pointer-events-none ml-1 bg-[#b18bf7] px-2 text-3xl text-white hover:bg-[#b18bf7]">
              Raiffe
            </Button>
          </div>

          <div className="flex w-full flex-row items-center justify-center text-3xl">
            <h1>I&apos;m a </h1>
            <Button className="pointer-events-none ml-1 bg-[#fab676] px-2 text-3xl text-white hover:bg-[#fab676]">
              full-stack developer,
            </Button>
          </div>

          <div className="flex w-full flex-row items-center justify-center text-3xl">
            <h1>here to turn ideas into </h1>
            <Button className="pointer-events-none ml-1 bg-[#94e69e] px-2 text-3xl text-white hover:bg-[#94e69e]">
              reality.
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomeCard;
