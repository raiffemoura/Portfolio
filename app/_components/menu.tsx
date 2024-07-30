"use client";
import whatsapp from "../_assets/whatsappIcon.png";
import {
  FolderCheck,
  HouseIcon,
  MailIcon,
  StarIcon,
  CircleUserIcon,
  Instagram,
  Linkedin,
  MoveUpRightIcon,
} from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
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
      <div className="flex max-w-fit items-center justify-between gap-3 rounded-3xl bg-[#000000] bg-opacity-30 p-3 backdrop-blur-lg">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Link href={"/"}>
              <Button
                className={`h-12 w-12 rounded-lg border border-[#333333] ${selected === "home" ? "bg-[#fac99c] bg-opacity-100" : "bg-black bg-opacity-10"} p-0 text-white hover:scale-110 hover:bg-[#fac99c] hover:transition-all hover:ease-in-out`}
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
                className={`h-12 w-12 rounded-lg border border-[#333333] hover:scale-110 hover:transition-all hover:ease-in-out ${selected === "about" ? "bg-[#9fd8ff] bg-opacity-100" : "bg-black bg-opacity-10"} p-0 text-white hover:bg-[#9fd8ff]`}
              >
                <CircleUserIcon />
              </Button>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent>About me</HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Link href={"/skills"}>
              <Button
                className={`h-12 w-12 rounded-lg border border-[#333333] hover:scale-110 hover:transition-all hover:ease-in-out ${selected === "skills" ? "bg-[#f8a9a8] bg-opacity-100" : "bg-black bg-opacity-10"} p-0 text-white hover:bg-[#f8a9a8]`}
              >
                <StarIcon />
              </Button>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent>Skills</HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Link href={"/projects"}>
              <Button
                className={`h-12 w-12 rounded-lg border border-[#333333] hover:scale-110 hover:transition-all hover:ease-in-out ${selected === "projects" ? "bg-[#b0e3b6] bg-opacity-100" : "bg-black bg-opacity-10"} p-0 text-white hover:bg-[#b0e3b6]`}
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
                className={`h-12 w-12 rounded-lg border border-[#333333] ${selected === "contact" ? "bg-[#9fd8ff] bg-opacity-100" : "bg-black bg-opacity-10"} p-0 text-white hover:bg-[#9fd8ff]`}
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
              <Button className="h-12 w-12 rounded-lg border border-[#333333] bg-black bg-opacity-10 p-0 text-white hover:bg-[#0077b5]">
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
            <Link href="https://www.instagram.com/raiffemoura" target="_blank">
              <Button className="h-12 w-12 rounded-lg border border-[#333333] bg-black bg-opacity-10 p-0 text-white hover:bg-[#c45794]">
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
              <Button className="h-12 w-12 rounded-lg border border-[#333333] bg-black bg-opacity-10 p-0 text-white hover:bg-[#25D366]">
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

        {/* <Button className="h-12 w-12 rounded-lg border border-[#e2e2e2] bg-white p-0 text-black hover:bg-[#c8adfa]">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MailIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Contacts</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Instagram /> <span className="pl-2">Instagram</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <Linkedin /> <span className="pl-2">Linkedin</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <MailIcon /> <span className="pl-2">Mail</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Button> */}

        {/* <ButtonMenu color="#fac99c">
          <HouseIcon />
        </ButtonMenu>
        <ButtonMenu color="#f8a9a8">
          <ArrowBigDown />
        </ButtonMenu>
        <ButtonMenu color="#f7e5b7">
          <HouseIcon />
        </ButtonMenu>
        <ButtonMenu color="#b0e3b6">
          <HouseIcon />
        </ButtonMenu>
        <ButtonMenu color="#9ccbf5">
          <HouseIcon />
        </ButtonMenu>
        <ButtonMenu color="#9fd8ff">
          <HouseIcon />
        </ButtonMenu>
        <ButtonMenu color="#c8adfa">
          <HouseIcon />
        </ButtonMenu>
        <ButtonMenu color="#ffb3e9">
          <HouseIcon />
        </ButtonMenu> */}
      </div>
    </>
  );
};

export default Menu;
