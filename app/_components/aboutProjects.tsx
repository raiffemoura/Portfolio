import Image from "next/image";
import { Card } from "./ui/card";
import portfolios from "../_assets/portfol-ios.png";
import ifoodfy from "../_assets/ifoodfy.jpg";
import pbbarbers from "../_assets/pbbarbers.jpg";
import institucional from "../_assets/institucional.jpg";
import landingpage from "../_assets/landingpage.jpg";
import ecomerce from "../_assets/ecommerce3.jpg";

import Link from "next/link";

const AboutProjects = () => {
  return (
    <div className="fadeIn scrollbar-hidden mt-[3rem] flex h-full w-full items-start justify-center gap-3 overflow-auto">
      <div className="scrollbar-hidden flex max-h-[90%] flex-col gap-4 overflow-y-auto md:grid md:grid-cols-2">
        <Link href="https://portfol-ios.vercel.app/">
          <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50 max-md:w-[21rem]">
            <Image
              src={portfolios}
              alt="portfolios"
              className="h-[100%] w-[100%] rounded-xl"
            />
            <div className="flex w-full flex-col justify-start text-xl">
              <h1 className="text-xl font-bold">Portfol-IOS </h1>
              <p className="text-sm text-gray-300">
                Um portfólio interativo com uma experiência inovadora que
                demonstra a minha preparação e capacidade como desenvolvedor
                Full Stack.
              </p>
              <br />
              <p className="text-sm text-gray-300">
                Inspirado pela familiaridade dos smartphones, criei um website
                que simula a interface de um Iphone, com cada &quot;app&quot;
                representando um projeto de maneira envolvente e profissional.
              </p>
              <div className="mt-3 flex gap-2">
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">React</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">JS</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">API</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">MongoDB</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">NodeJs</p>
                </Card>
              </div>
            </div>
          </Card>
        </Link>
        <Link href="https://ifoodify.vercel.app/">
          <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50 max-md:w-[21rem]">
            <Image
              src={ifoodfy}
              alt="ifoodfy"
              className="h-[100%] w-[100%] rounded-xl"
            />
            <div className="flex w-full flex-col justify-start text-xl">
              <h1 className="text-xl font-bold">iFoodfy </h1>
              <p className="text-sm text-gray-300">
                Um clone do popular aplicativo iFood, demonstrando minhas
                habilidades em desenvolvimento Full Stack com tecnologias
                modernas para uma experiência de usuário rápida e intuitiva.
              </p>
              <br />
              <p className="text-sm text-gray-300">
                O iFoodfy inclui autenticação com o Google, histórico de
                pedidos, catálogo de produtos, carrinho de compras e um processo
                de checkout eficiente.
              </p>
              <div className="mt-3 flex gap-1">
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Prisma</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Next.js</p>
                </Card>

                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">TypeScript</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Google OAuth</p>
                </Card>
              </div>
            </div>
          </Card>
        </Link>
        <Link href="https://pb-barbers.vercel.app/">
          <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50 max-md:w-[21rem]">
            <Image
              src={pbbarbers}
              alt="pb barbers"
              className="h-[100%] w-[100%] rounded-xl"
            />
            <div className="flex w-full flex-col justify-start text-xl">
              <h1 className="text-xl font-bold">PB Barbers </h1>
              <p className="text-sm text-gray-300">
                Uma plataforma de agendamento para barbearias, destacando minhas
                habilidades em desenvolvimento Full Stack com foco em uma
                experiência de usuário simples e eficiente.
              </p>
              <br />
              <p className="text-sm text-gray-300">
                O PB Barbers oferece funcionalidades como agendamento online,
                autenticação via Google, gerenciamento de horários e uma
                interface intuitiva para clientes e barbearias.
              </p>

              <div className="mt-3 flex gap-1">
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Prisma</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Next.js</p>
                </Card>

                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">TypeScript</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Google OAuth</p>
                </Card>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="https://catedralcomunhao.framer.website/">
          <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50 max-md:w-[21rem]">
            <Image
              src={institucional}
              alt="Catedral Anglicana"
              className="h-[100%] w-[100%] rounded-xl"
            />
            <div className="flex w-full flex-col justify-start text-xl">
              <h1 className="text-xl font-bold">Catedral Anglicana</h1>
              <p className="text-sm text-gray-300">
                Site institucional da Igreja Catedral Anglicana, projetado para
                oferecer uma navegação intuitiva e um design acolhedor,
                refletindo a identidade e missão da comunidade cristã.
              </p>
              <br />
              <p className="text-sm text-gray-300">
                O site inclui páginas de eventos, álbuns de fotos, materiais
                para download e informações de contato, garantindo
                acessibilidade e engajamento para os membros e visitantes.
              </p>
              <div className="mt-3 flex gap-1">
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Framer</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">UX/UI Design</p>
                </Card>
              </div>
            </div>
          </Card>
        </Link>
        <Link href="https://veraselopesbpcloas.framer.website/">
          <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50 max-md:w-[21rem]">
            <Image
              src={landingpage}
              alt="Veras & Lopes Advocacia"
              className="h-[100%] w-[100%] rounded-xl"
            />
            <div className="flex w-full flex-col justify-start text-xl">
              <h1 className="text-xl font-bold">Veras & Lopes Advocacia</h1>
              <p className="text-sm text-gray-300">
                Landing page desenvolvida para um escritório de advocacia,
                focada na captação de leads para clientes interessados no
                benefício BPC LOAS.
              </p>
              <br />
              <p className="text-sm text-gray-300">
                O site é altamente persuasivo, com estrutura otimizada para
                conversão, CTA&apos;s estratégicos. Foi desenvolvido para ter
                alta performance em impulsionamentos pagos, garantindo melhor
                captação de leads qualificados.
              </p>
              <div className="mt-3 flex gap-1">
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Framer</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Landing Page</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Otimização de Conversão</p>
                </Card>
              </div>
            </div>
          </Card>
        </Link>
        <Link href="https://benifalcao.lojavirtualnuvem.com.br/">
          <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50 max-md:w-[21rem]">
            <Image
              src={ecomerce}
              alt="Beni Falcão"
              className="h-[100%] w-[100%] rounded-xl"
            />
            <div className="flex w-full flex-col justify-start text-xl">
              <h1 className="text-xl font-bold">Beni Falcão</h1>
              <p className="text-sm text-gray-300">
                E-commerce especializado em enxovais minimalistas, oferecendo
                produtos de alta qualidade com design sofisticado e funcional.
              </p>
              <br />
              <p className="text-sm text-gray-300">
                A plataforma conta com uma experiência de compra fluida,
                integração com meios de pagamento e logística eficiente,
                garantindo uma jornada agradável para os clientes.
              </p>
              <div className="mt-3 flex gap-1">
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Nuvemshop</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">E-commerce</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">UX/UI Design</p>
                </Card>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>

    // <div className="fadeIn scrollbar-hidden mt-[3rem] flex h-full w-full items-start justify-center gap-3 overflow-auto">
    //       <div className="scrollbar-hidden flex max-h-[90%] gap-4 overflow-y-auto">
    //         <div className="flex flex-col gap-3">
    //           <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50">
    //             <Image
    //               src={portfolios}
    //               alt="portfolios"
    //               className="h-[100%] w-[100%] rounded-xl"
    //             />
    //             <div className="flex w-full flex-col justify-start text-xl">
    //               <h1 className="text-xl font-bold">Portfol-IOS </h1>
    //               <p className="text-sm text-gray-300">
    //                 Um portfólio interativo com uma experiência inovadora que
    //                 demonstra a minha preparação e capacidade como desenvolvedor
    //                 Full Stack.
    //               </p>
    //               <br />
    //               <p className="text-sm text-gray-300">
    //                 Inspirado pela familiaridade dos smartphones, criei um website
    //                 que simula a interface de um Iphone, com cada &quot;app&quot;
    //                 representando um projeto de maneira envolvente e profissional.
    //               </p>
    //               <div className="mt-3 flex gap-2">
    //                 <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
    //                   <p className="text-xs">React</p>
    //                 </Card>
    //                 <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
    //                   <p className="text-xs">JS</p>
    //                 </Card>
    //                 <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
    //                   <p className="text-xs">API</p>
    //                 </Card>
    //                 <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
    //                   <p className="text-xs">MongoDB</p>
    //                 </Card>
    //                 <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
    //                   <p className="text-xs">NodeJs</p>
    //                 </Card>
    //               </div>
    //             </div>
    //           </Card>

    //           <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50">
    //             <Image
    //               src={ecommerce}
    //               alt="ecommerce"
    //               className="h-[100%] w-[100%] rounded-xl"
    //             />
    //             <div className="flex w-full flex-col justify-start text-xl">
    //               <h1 className="text-xl font-bold">E-commerce WP</h1>
    //               <p className="text-sm text-gray-300">
    //                 Um projeto de e-commerce em construção, desenvolvido com
    //                 WordPress para demonstrar habilidades na criação de lojas online
    //                 intuitivas e responsivas.
    //               </p>
    //               <br />
    //               <p className="text-sm text-gray-300">
    //                 Este e-commerce inclui funcionalidades como gerenciamento de
    //                 produtos, carrinho de compras, sistema de checkout seguro e
    //                 integração com plataformas de pagamento.
    //               </p>
    //               <div className="mt-3 flex gap-2">
    //                 <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
    //                   <p className="text-xs">WordPress</p>
    //                 </Card>
    //                 <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
    //                   <p className="text-xs">WooCommerce</p>
    //                 </Card>

    //                 <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
    //                   <p className="text-xs">MySQL</p>
    //                 </Card>
    //               </div>
    //             </div>
    //           </Card>
    //         </div>
    //         <div className="flex flex-col gap-3">
    //           <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50">
    //             <Image
    //               src={ifoodfy}
    //               alt="ifoodfy"
    //               className="h-[100%] w-[100%] rounded-xl"
    //             />
    //             <div className="flex w-full flex-col justify-start text-xl">
    //               <h1 className="text-xl font-bold">iFoodfy </h1>
    //               <p className="text-sm text-gray-300">
    //                 Um clone do popular aplicativo iFood, demonstrando minhas
    //                 habilidades em desenvolvimento Full Stack com tecnologias
    //                 modernas para uma experiência de usuário rápida e intuitiva.
    //               </p>
    //               <br />
    //               <p className="text-sm text-gray-300">
    //                 O iFoodfy inclui autenticação com o Google, histórico de
    //                 pedidos, catálogo de produtos, carrinho de compras e um processo
    //                 de checkout eficiente.
    //               </p>
    //               <div className="mt-3 flex gap-1">
    //                 <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
    //                   <p className="text-xs">Prisma</p>
    //                 </Card>
    //                 <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
    //                   <p className="text-xs">Next.js</p>
    //                 </Card>

    //                 <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
    //                   <p className="text-xs">TypeScript</p>
    //                 </Card>
    //                 <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
    //                   <p className="text-xs">Google OAuth</p>
    //                 </Card>
    //               </div>
    //             </div>
    //           </Card>
    //         </div>
    //       </div>
    //     </div>
  );
};

export default AboutProjects;
