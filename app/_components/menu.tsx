"use client";
import whatsapp from "../_assets/whatsappIcon.png";
import {
  FolderCheck,
  HouseIcon,
  MailIcon,
  CircleUserIcon,
  Instagram,
  Linkedin,
  MoveUpRightIcon,
} from "lucide-react";

import { Button } from "./ui/button";
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Image from "next/image";

interface MenuProps {
  selected?: string;
}

const Menu = ({ selected }: MenuProps) => {
  return (
    <>
      <div className="scrollbar-hidden fixed bottom-3 flex w-fit items-center justify-between gap-2 overflow-x-auto rounded-3xl bg-[#000000] bg-opacity-30 p-3 backdrop-blur-lg max-md:w-[20.5rem]">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Link href={"/"}>
              <Button
                className={`h-12 w-12 rounded-lg border border-none max-md:h-10 max-md:w-10 ${selected === "home" ? "bg-[#fac99c] bg-opacity-100" : "bg-black bg-opacity-10"} p-0 text-white hover:scale-110 hover:bg-[#fac99c] hover:transition-all hover:ease-in-out`}
              >
                <HouseIcon />
                <HoverCardContent>Home</HoverCardContent>
              </Button>
            </Link>
          </HoverCardTrigger>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Link href={"/about"}>
              <Button
                className={`h-12 w-12 rounded-lg border border-none hover:scale-110 hover:transition-all hover:ease-in-out max-md:h-10 max-md:w-10 ${selected === "about" ? "bg-[#9fd8ff] bg-opacity-100" : "bg-black bg-opacity-10"} p-0 text-white hover:bg-[#9fd8ff]`}
              >
                <CircleUserIcon />
              </Button>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent>About me</HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Link href={"/projects"}>
              <Button
                className={`h-12 w-12 rounded-lg border border-none hover:scale-110 hover:transition-all hover:ease-in-out max-md:h-10 max-md:w-10 ${selected === "projects" ? "bg-[#b0e3b6] bg-opacity-100" : "bg-black bg-opacity-10"} p-0 text-white hover:bg-[#b0e3b6]`}
              >
                <FolderCheck />
              </Button>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent>Projects</HoverCardContent>
        </HoverCard>

        <span className="h-6 w-[1px] border-l-2"></span>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Link href="/contact">
              <Button
                className={`h-12 w-12 rounded-lg border border-none max-md:hidden max-md:h-10 max-md:w-10 ${selected === "contact" ? "bg-[#9fd8ff] bg-opacity-100" : "bg-black bg-opacity-10"} p-0 text-white hover:bg-[#9fd8ff]`}
              >
                <MailIcon />
              </Button>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="flex items-center">
              1993.raiffe@gmail.com{" "}
              <MoveUpRightIcon className="ml-1" size={12} />
            </span>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Link
              href="https://www.linkedin.com/in/raiffemoura/"
              target="_blank"
            >
              <Button className="h-12 w-12 rounded-lg border border-none bg-black bg-opacity-10 p-0 text-white hover:bg-[#0077b5] max-md:h-10 max-md:w-10">
                <Linkedin />
              </Button>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="flex items-center">
              /raiffemoura <MoveUpRightIcon className="ml-1" size={12} />
            </span>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Link
              href="https://www.instagram.com/raiffe.design"
              target="_blank"
            >
              <Button className="h-12 w-12 rounded-lg border border-none bg-black bg-opacity-10 p-0 text-white hover:bg-[#c45794] max-md:h-10 max-md:w-10">
                <Instagram />
              </Button>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="flex items-center">
              @raiffemoura <MoveUpRightIcon className="ml-1" size={12} />
            </span>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Link
              href="https://wa.me/5583991669951?text=Olá! Eu visitei seu portfólio e gostaria de saber mais sobre os seus serviços. Podemos conversar?"
              target="_blank"
            >
              <Button className="h-12 w-12 rounded-lg border border-none bg-black bg-opacity-10 p-0 text-white hover:bg-[#25D366] max-md:h-10 max-md:w-10">
                <Image src={whatsapp} width={20} height={20} alt={"whatsapp"} />
              </Button>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="flex items-center">
              +55 (83) 9 9166-9951
              <Image
                src={whatsapp}
                width={12}
                height={12}
                alt={"whatsapp"}
                className="ml-1"
              />
            </span>
          </HoverCardContent>
        </HoverCard>
      </div>
    </>
  );
};

export default Menu;
