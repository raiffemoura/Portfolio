"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import portfolios from "../_assets/portfol-ios.png";
import ifoodfy from "../_assets/ifoodfy.jpg";
import pbbarbers from "../_assets/pbbarbers.jpg";
import ecommerce from "../_assets/ecommerce3.jpg";
import institucional from "../_assets/institucional.jpg";
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
            alt="ifoodfy"
            className={`absolute h-52 w-52 rounded-lg max-md:h-36 max-md:w-36 ${isHovered ? "slide-in max-md:slide-in-mobile" : "slide-out max-md:slide-out-mobile"} `}
          />
          {/* meio em baixo */}{" "}
          <Image
            src={ecommerce}
            alt="ecommerce"
            className={`absolute h-52 w-52 rounded-lg max-md:h-36 max-md:w-36 ${isHovered ? "slide-in2 max-md:slide-in2-mobile" : "slide-out2 max-md:slide-out2-mobile"} `}
          />
          {/* esquerda em cima */}
          <Image
            src={portfolios}
            alt="portfolio"
            className={`absolute h-52 w-52 rounded-lg max-md:h-36 max-md:w-36 ${isHovered ? "slide-in3 max-md:slide-in3-mobile" : "max-md:slide-out3-mobile slide-out3"} `}
          />
          {/* direta em cima */}
          <Image
            src={pbbarbers}
            alt="pb barbers"
            className={`absolute h-52 w-52 rounded-lg max-md:h-36 max-md:w-36 ${isHovered ? "slide-in4 max-md:slide-in4-mobile" : "max-md:slide-out4-mobile slide-out4"} `}
          />
          {/* direta em baixo */}
          <Image
            src={institucional}
            alt="pb barbers"
            className={`absolute h-52 w-52 rounded-lg max-md:h-36 max-md:w-36 ${isHovered ? "slide-in5 max-md:slide-in5-mobile" : "slide-out5 max-md:slide-out5-mobile"} `}
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
