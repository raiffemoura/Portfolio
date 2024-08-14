import Image from "next/image";
import { Card } from "./ui/card";
import profile from "../_assets/profile.jpg";
import {
  ArrowUpRightIcon,
  BriefcaseBusinessIcon,
  Instagram,
  Linkedin,
  MailIcon,
  MapPinIcon,
} from "lucide-react";
import Link from "next/link";
import SkillsBox from "./skills";
import { Button } from "./ui/button";
import whatsapp from "../_assets/whatsappIcon.png";

const AboutCard = () => {
  return (
    <div className="fadeIn md:scrollbar-hidden mt-[3rem] flex h-full w-full items-start justify-center gap-3 overflow-auto max-md:flex-col max-md:items-center max-md:overflow-y-auto">
      <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-40 max-md:w-[20rem] md:mb-20">
        <Image
          src={profile}
          alt="profile"
          className="h-[100%] w-[100%] rounded-xl"
        />
        <div className="flex w-full flex-col justify-start text-xl">
          <h1 className="text-xl font-bold">Olá outra vez &#128075; </h1>
          <p className="text-sm text-gray-300">
            Atualmente, trabalho como desenvolvedor full-stack, criando
            experiências digitais que combinam funcionalidade e diversão, e
            impactam positivamente a vida das pessoas. Transformo ideias
            inovadoras em soluções reais!
          </p>
          <div className="mt-3 flex gap-2">
            <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300">
              <MapPinIcon size={16} /> <p className="text-xs">Brasil</p>
            </Card>
            <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300">
              <BriefcaseBusinessIcon size={16} />
              <p className="text-xs">Desenvolvedor Freelancer</p>
            </Card>
          </div>
        </div>
      </Card>
      <div className="scrollbar-hidden flex max-h-[90%] flex-col gap-4 overflow-y-auto">
        <Card className="item flex w-[25rem] flex-col items-start justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-40 max-md:w-[20rem]">
          <h1 className="text-xl font-bold">Um Pouco Sobre Mim</h1>
          <p className="text-sm text-gray-300">
            Sou Raiffe Moura, um desenvolvedor full-stack com um forte desejo de
            transformar ideias em soluções digitais que sejam ao mesmo tempo
            funcionais e agradáveis. Minha trajetória é guiada pela meta de
            tornar a tecnologia mais acessível e relevante.
          </p>
          <p className="text-sm text-gray-300">
            Quando não estou programando, você me encontrará no mundo do
            CrossFit, sempre em busca de novos desafios e competições. Minha fé
            cristã é uma parte essencial da minha vida, orientando meus valores
            e impulsionando minha busca pela excelência e pelo apoio aos outros.
          </p>
          <p className="text-sm text-gray-300">
            Estou sempre em busca de oportunidades para crescer e inovar. Vamos
            nos conectar e criar algo incrível juntos!
          </p>
        </Card>

        <Card className="item flex w-[25rem] flex-col items-start justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-40 max-md:w-[20rem]">
          <h1 className="text-xl font-bold">Experiência</h1>
          <div>
            <Link target="_blank" href={"https://ifoodify.vercel.app/"}>
              <Card className="mb-2 flex w-fit items-center justify-center gap-1 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-2 py-1 text-gray-300">
                <p className="text-xs">IFOODFY</p>
                <ArrowUpRightIcon size={16} />
              </Card>
            </Link>
            <p className="text-sm text-gray-300">
              Desenvolvi um clone intuitivo do iFood, com navegação simples,
              responsiva e processos de pedido eficientes. Implementei
              funcionalidades chave como login com o Google e atualizações em
              tempo de entregas para melhorar a experiência do usuário.
            </p>
          </div>

          <span className="m-1 flex h-[1px] w-[100%] justify-center bg-[#f5f7f7] bg-opacity-20"></span>

          <div>
            <Link target="_blank" href={"https://portfol-ios.vercel.app/"}>
              <Card className="mb-2 flex w-fit items-center justify-center gap-1 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-2 py-1 text-gray-300">
                <p className="text-xs">PORTFOL-IOS</p>
                <ArrowUpRightIcon size={16} />
              </Card>
            </Link>
            <p className="text-sm text-gray-300">
              Explore uma experiência inovadora que destaca minha preparação e
              capacidade como desenvolvedor Full Stack. Em vez de um formato
              tradicional, adotei uma abordagem dinâmica, simulando a interface
              de um iPhone para apresentar meus projetos.
            </p>
            <br />
            <p className="text-sm text-gray-300">
              Cada &quot;app&quot; reflete minha habilidade em enfrentar
              desafios e encontrar soluções criativas.
            </p>
          </div>
        </Card>

        <Card className="item flex w-[25rem] flex-col items-start justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-40 max-md:w-[20rem]">
          <h1 className="text-xl font-bold">Skills</h1>
          <div className="flex w-full justify-between p-3">
            <span className="md:skills-1 max-md:skills-11">
              <SkillsBox color="#fac99c" text="Prisma ORM"></SkillsBox>
            </span>
            <span className="md:skills-2 max-md:skills-22">
              <SkillsBox color="#b0e3b6" text="Node.js"></SkillsBox>
            </span>
          </div>
          <div className="flex w-full justify-between p-3">
            <span className="md:skills-3 max-md:skills-33">
              <SkillsBox color="#f8a9a8" text="Tailwind "></SkillsBox>
            </span>
            <span className="md:skills-4 max-md:skills-44">
              <SkillsBox color="#9fd8ff" text="React"></SkillsBox>
            </span>
          </div>
          <div className="flex w-full justify-between p-3">
            <span className="md:skills-5 max-md:skills-55">
              <SkillsBox color="#c8adfa" text="NextJS"></SkillsBox>
            </span>
            <span className="md:skills-6 max-md:skills-66">
              <SkillsBox color="#ffb3e9" text="RESTful APIs"></SkillsBox>
            </span>
          </div>
        </Card>

        <Card className="item flex w-[25rem] flex-col items-start justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-40 max-md:w-[20rem]">
          <h1 className="text-xl font-bold">Vamos nos conectar?</h1>
          <Link
            target="_blank"
            href="http://localhost:3000/contact"
            className="w-full"
          >
            <Button className="text-md flex w-full items-center gap-2 bg-[#1d1d1d] hover:bg-[#b0e3b6] hover:text-black">
              <MailIcon size={20} /> 1993.raiffe@gmail.com
            </Button>
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/raiffemoura/"
            className="w-full"
          >
            <Button className="text-md flex w-full items-center gap-2 bg-[#1d1d1d] hover:bg-[#0077b5]">
              <Linkedin size={20} />
              /raiffemoura
            </Button>
          </Link>

          <Link
            target="_blank"
            href="https://www.instagram.com/raiffemoura/"
            className="w-full"
          >
            <Button className="text-md flex w-full items-center gap-2 bg-[#1d1d1d] hover:bg-[#c45794]">
              <Instagram size={20} /> @raiffemoura
            </Button>
          </Link>

          <Link
            target="_blank"
            href="https://wa.me/5583991669951?text=Olá! Eu visitei seu portfólio e gostaria de saber mais sobre os seus serviços. Podemos conversar?"
            className="w-full"
          >
            <Button className="text-md flex w-full items-center gap-2 bg-[#1d1d1d] hover:bg-[#25D366]">
              <Image src={whatsapp} className="w-4" alt={"whatsapp"} />
              (83) 9 9166-9951
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default AboutCard;
