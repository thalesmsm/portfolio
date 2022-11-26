import Head from "next/head";
import {BsFillMoonStarsFill, BsSunFill, BsArrowBarUp } from "react-icons/bs";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/perfil.jpg";
import html from "../public/html.png";
import css from "../public/css.png";
import js from "../public/js.png";
import ts from "../public/ts.png";
import react from "../public/react.png";
import redux from "../public/redux.png";
import mysql from "../public/mysql.png";
import mongo from "../public/mongo.png";
import node from "../public/node.png";
import jest from "../public/jest.png";
import proj1 from "../public/proj1.png";
import proj2 from "../public/proj2.png";
import { useState } from "react";
import LinguagensCard from "../components/LinguagensCard";
import MenuHamburger from "../components/MenuHamburger";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title>Portfólio Thales Maciel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 px-10  md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen lg:flex lg:flex-col lg:justify-between">
          <a className="absolute" name="topo"></a>
          <nav className="py-5">
            <MenuHamburger />
            <ul className="hidden md:flex md:justify-around md:items-center">
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="#">Sobre</a>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="#habilidades">Habilidades/Tecnologias</a>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="#projetos">Projetos</a>
              </li>
            </ul>
              <div className="w-10 h-10 flex justify-center items-center absolute z-0 right-4 top-3">
                {!darkMode ? 
                  <BsFillMoonStarsFill 
                    onClick={() => setDarkMode(true)}
                    className="cursor-pointer text-2xl"
                  /> :
                  <BsSunFill 
                    onClick={() => setDarkMode(false)}
                    className="cursor-pointer text-2xl text-yellow-300"
                  />
                }
              </div>
          </nav>
          <div className="text-center p-5 lg:flex lg:flex-col lg:items-center lg:justify-between">
            <div className="mb-12">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                Thales Maciel
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
                Desenvolvedor Fullstack
              </h3>
            </div>
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="relative mx-auto rounded-full overflow-hidden shadow-xl w-60 h-60 lg:mx-0 md:h-80 md:w-80">
                <Image src={deved} alt="deved" layout="fill" objectFit="cover"/>
              </div>
              <div className="lg:w-1/2">
                <p className="text-md text-justify indent-12 py-5 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-200">
                  Em transição de carreira para a área da tecnologia. Desde Fevereiro de 2022 estudando programação na <span className="text-teal-500">Trybe</span>, escola de tecnologia, e a cada dia mais apaixonado pela área de desenvolvimento de software, pela oportunidade de exercer minha criatividade para criar soluções que impactam na vida das pessoas. 

                  Desde início dessa jornada temos vivência prática diária em programação e foco em habilidades para o mercado de trabalho, inclusive soft-skills. Desenvolvemos vários projetos com as tecnologias: <span className="font-bold">CSS, HTML, JavaScript, React, Redux, Context API, React Hooks, MySQL, Docker, Jest, Chai, Sinon, Node, Sequelize, Typescipt. Versionamos nosso código com Git e GitHub e também usamos métodos ágeis como Scrum e Kanban.</span>
                </p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200">
                  <a href="https://www.linkedin.com/in/thalesmsm/" target="_blank" rel="noreferrer">
                    <AiFillLinkedin className="hover:text-gray-400" />
                  </a>
                  <a href="https://github.com/thalesmsm" target="_blank" rel="noreferrer">
                    <AiFillGithub className="hover:text-gray-400" />
                  </a>
              
                </div>
              </div>
            </div>
          </div>
          <div className="w-16"></div>
        </section>

        <section id="habilidades" className="flex flex-col justify-evenly">
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">
              Habilidades/Tecnologias
            </h3>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Durante todo o processo de formação em Desenvolvimento Web pude ver diversas tecnologias que me tornaram apto
              a atuar como <span className="text-teal-500">Desenvolvedor Fullstack</span>. As principais 
            </p> */}
          </div>
          <div className="flex overflow-x-scroll gap-10 h-52 lg:flex-wrap lg:h-96">
            <LinguagensCard src={html} name='HTML' />
            <LinguagensCard src={css} name='CSS'/>
            <LinguagensCard src={js} name='Javascript'/>
            <LinguagensCard src={ts} name='Typescript'/>
            <LinguagensCard src={react} name='React'/>
            <LinguagensCard src={redux} name='Redux'/>
            <LinguagensCard src={mysql} name='MySQL'/>
            <LinguagensCard src={mongo} name='mongoDB'/>
            <LinguagensCard src={node} name='Node.js'/>
            <LinguagensCard src={jest} name='Jest'/>
          </div>
        </section>

        <section id="projetos" className="">
          <div>
            <h3 className="text-3xl py-1 mt-10 dark:text-gray-200">Projetos</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Desde o começo da minha jornada como desenvolvedor, tenho feito projetos pessoais e 
              do curso da Trybe onde pude por em prática todos conhecimentos adquiridos até agora.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Alguns deles estão disponíveis e podem ser acessados clicando nos cards a baixo.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row">
            <div className="basis-1/2 flex-1">
              <Image src={proj1} alt="web1" className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            <div className="basis-1/2 flex-1">
              <Image src={proj2} alt="web1" className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
          </div>
        </section>
      </main>
      <a href="#topo">
        <div className="rounded-full border-solid shadow-lg w-10 h-10 flex justify-center items-center bg-neutral-200 fixed z-0 right-4 bottom-8">
            <BsArrowBarUp />
        </div>
      </a>
    </div>
  )
}
