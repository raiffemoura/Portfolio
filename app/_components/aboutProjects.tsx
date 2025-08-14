import Image from "next/image";
import { Card } from "./ui/card";
import portfolios from "../_assets/portfol-ios.png";
import ifoodfy from "../_assets/ifoodfy.jpg";
import pbbarbers from "../_assets/pbbarbers.jpg";
import institucional from "../_assets/institucional.jpg";
import landingpage from "../_assets/landingpage.jpg";
import ecomerce from "../_assets/ecommerce3.jpg";
import portSPA1 from "../_assets/spa1.png";
import portMAYA1 from "../_assets/maya2.png";
import maisconstrutora from "../_assets/MAIS2.png";
import trivium from "../_assets/TRIV.png";

import Link from "next/link";

const AboutProjects = () => {
  return (
    <div className="fadeIn scrollbar-hidden flex h-full w-full items-start justify-center gap-3 overflow-hidden">
      <div className="scrollbar-hidden flex max-h-[100%] flex-col gap-4 overflow-y-auto pb-[5rem] pt-[3rem] md:grid md:grid-cols-2">
        <Link href="https://maisconstrutora.framer.website/">
          <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50 max-md:w-[21rem]">
            <Image
              src={maisconstrutora}
              alt="Mais Construtora"
              className="h-[100%] w-[100%] rounded-xl"
            />
            <div className="flex w-full flex-col justify-start text-xl">
              <h1 className="text-xl font-bold">Mais Construtora</h1>
              <p className="text-sm text-gray-300">
                A Mais Construtora é uma das líderes no mercado imobiliário,
                destacando-se pela qualidade e inovação na execução de projetos
                residenciais e comerciais. Com uma sólida trajetória de mais de
                10 anos, a empresa oferece soluções completas, garantindo
                excelência em cada etapa de suas obras e conquistando a
                confiança de seus clientes.
              </p>

              <br />
              <p className="text-sm text-gray-300">
                O redesign do site da Mais Construtora foi uma verdadeira
                transformação digital. Modernizei o layout para refletir a
                sofisticação e segurança da empresa, criando uma experiência
                fluida e intuitiva. A nova plataforma agora transmite ainda mais
                autoridade e confiança, alinhando-se perfeitamente com os
                valores de excelência e inovação que a empresa representa.
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

        <Link href="https://trivium-site.framer.website/">
          <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50 max-md:w-[21rem]">
            <Image
              src={trivium} // Substitua com a imagem apropriada
              alt="Trivium"
              className="h-[100%] w-[100%] rounded-xl"
            />
            <div className="flex w-full flex-col justify-start text-xl">
              <h1 className="text-xl font-bold">Trivium</h1>
              <p className="text-sm text-gray-300">
                A Trivium é uma consultoria de soluções Microsoft 365,
                reconhecida por sua excelência em serviços de implantação,
                migração e suporte técnico. Com mais de 5 milhões de usuários
                ativos, a empresa se destaca como parceira estratégica de
                empresas, governos e instituições de ensino, promovendo uma
                transformação digital segura e eficiente.
              </p>
              <br />
              <p className="text-sm text-gray-300">
                O redesign do site da Trivium trouxe modernidade e sofisticação
                à sua presença digital. Com um layout renovado e uma navegação
                mais intuitiva, reforcei a imagem de autoridade da empresa,
                criando uma plataforma alinhada aos seus valores e ao padrão
                Microsoft, consolidando ainda mais sua posição no mercado.
              </p>

              <div className="mt-3 flex gap-1">
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Microsoft 365</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">UX/UI Design</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Consultoria Digital</p>
                </Card>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="https://spaexpressonline.com.br/">
          <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50 max-md:w-[21rem]">
            <Image
              src={portSPA1}
              alt="Projeto SPA Express"
              className="h-[100%] w-[100%] rounded-xl"
            />
            <div className="flex w-full flex-col justify-start text-xl">
              <h1 className="text-xl font-bold">SPA Express</h1>
              <p className="text-sm text-gray-300">
                A SPA Express é a maior franquia de spa em domicílio do Brasil,
                com mais de 50 unidades ativas em diversas cidades. A marca é
                referência no setor de estética e bem-estar, oferecendo uma
                experiência exclusiva em casa, com foco em um atendimento de
                qualidade e digitalização em sua operação para otimizar os
                processos.
              </p>

              <br />
              <p className="text-sm text-gray-300">
                O redesign do site da SPA Express foi feito para garantir uma
                navegação intuitiva e otimizada, traduzindo a ampla oferta de
                serviços de forma clara e acessível. Com a implementação de um
                CMS no Framer e abas dinâmicas, o site agora oferece uma
                experiência rápida e fluida, resultando em maior conversão e
                fortalecimento da presença digital.
              </p>

              <div className="mt-3 flex flex-wrap gap-1">
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Framer</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">CMS</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">UX Design</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Performance</p>
                </Card>
              </div>
            </div>
          </Card>
        </Link>
        <Link href="https://mayacyrela.com.br/">
          <Card className="item flex h-fit w-[25rem] flex-col items-center justify-center gap-3 rounded-3xl border-none bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50 max-md:w-[21rem]">
            <Image
              src={portMAYA1}
              alt="Projeto Maya Cyrela"
              className="h-[100%] w-[100%] rounded-xl"
            />
            <div className="flex w-full flex-col justify-start text-xl">
              <h1 className="text-xl font-bold">Maya Cyrela</h1>
              <p className="text-sm text-gray-300">
                A Cyrela é uma das maiores e mais renomadas incorporadoras do
                Brasil, com mais de 60 anos de história no mercado imobiliário.
                Reconhecida por seus empreendimentos de alto padrão, a empresa
                tem parcerias com marcas internacionais como Pininfarina e
                Armani/Casa, e projetos icônicos como o Vista Cyrela by
                Armani/Casa e o Cyrela Pininfarina Rebouças.
              </p>
              <br />
              <p className="text-sm text-gray-300">
                Criar o site da Maya Cyrela foi uma oportunidade de traduzir
                digitalmente a sofisticação e exclusividade da marca. Com um
                layout moderno e navegação intuitiva, criei uma plataforma que
                reflete a excelência dos projetos da Cyrela, proporcionando uma
                experiência digital alinhada aos seus valores e consolidando sua
                autoridade no mercado imobiliário de luxo.
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Design Responsivo</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">WorPress</p>
                </Card>
                <Card className="flex w-fit items-center justify-center gap-2 rounded-sm border-none bg-[#1d1d1d] bg-opacity-40 px-3 py-1 text-gray-300 hover:bg-[#474747]">
                  <p className="text-xs">Performance</p>
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
                para download e formulário de contato, garantindo acessibilidade
                e engajamento para os membros e visitantes.
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
