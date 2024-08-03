"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import portfolios from "../_assets/portfol-ios.png";
import ifoodfy from "../_assets/ifoodfy.jpg";
import ecommerce from "../_assets/ecommerce.jpg";
import Image from "next/image";

const HomeCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (isHovered) {
      setHasInteracted(true);
    }
  }, [isHovered]);

  return (
    <div className="fadeIn md-max:w-[16rem] flex h-full w-full items-center justify-center overflow-hidden">
      <div>
        <div className={`z-10 ${!hasInteracted ? "hidden" : ""}`}>
          {/* esquerda em baixo */}
          <Image
            src={ifoodfy}
            alt="whatsapp"
            className={`initial-state absolute h-52 w-52 rounded-lg ${isHovered ? "slide-in" : "slide-out"} `}
          />
          {/* meio em baixo */}{" "}
          <Image
            src={ecommerce}
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
            src={ifoodfy}
            alt="whatsapp"
            className={`absolute h-52 w-52 rounded-lg ${isHovered ? "slide-in4" : "slide-out4"} `}
          />
          {/* direta em baixo */}
          <Image
            src={portfolios}
            alt="whatsapp"
            className={`absolute h-52 w-52 rounded-lg ${isHovered ? "slide-in5" : "slide-out5"} `}
          />
        </div>

        <Card
          onMouseEnter={() => setIsHovered(true)}
          onMouseMove={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-20 flex h-56 w-[34rem] flex-col items-center justify-between rounded-3xl border-none bg-[#000000] bg-opacity-30 py-4 text-white backdrop-blur-lg max-md:w-[22rem]"
        >
          <div className="flex w-full flex-row items-center justify-center text-3xl max-md:text-xl">
            <h1>Olá, eu sou </h1>
            <Button className="pointer-events-none ml-1 bg-[#b18bf7] px-2 text-3xl text-white hover:bg-[#b18bf7] max-md:text-xl">
              Raiffe
            </Button>
          </div>

          <div className="flex w-full flex-row items-center justify-center text-3xl max-md:text-xl">
            <h1>Um desenvolvedor</h1>
            <Button className="pointer-events-none ml-1 bg-[#fab676] px-2 text-3xl text-white hover:bg-[#fab676] max-md:text-xl">
              full-stack,
            </Button>
          </div>

          <div className="flex w-full flex-row items-center justify-center text-3xl max-md:text-xl">
            <h1>pronto para transformar </h1>
            <Button className="pointer-events-none ml-1 bg-[#94e69e] px-2 text-3xl text-white hover:bg-[#94e69e] max-md:text-xl">
              ideias
            </Button>
          </div>

          <div className="flex w-full flex-row items-center justify-center text-3xl max-md:text-xl">
            <h1>em </h1>
            <Button className="pointer-events-none ml-1 bg-[#ffb3e9] px-2 text-3xl text-white hover:bg-[#94e69e] max-md:text-xl">
              realidade.
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomeCard;
