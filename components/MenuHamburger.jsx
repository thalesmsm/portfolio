import { useState } from "react";

function MenuHamburger() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="md:hidden">
      <div className="flex md:hidden hover:cursor-pointer" onClick={ () => setMenu(!menu)}>
          <div className="space-y-2">
            <span className="block w-8 h-0.5 dark:bg-white animate-pulse bg-[#252525]"></span>
            <span className="block w-8 h-0.5 dark:bg-white animate-pulse bg-[#252525]"></span>
            <span className="block w-8 h-0.5 dark:bg-white animate-pulse bg-[#252525]"></span>
          </div>
        </div>
            {menu && 
              <div className="flex flex-col w-full mt-2 rounded-sm bg-white/60 md:hidden">
                <a
                  href="#"
                  className="h-10 p-2 border-b-[1px] border-black"
                >
                  Sobre
                </a>
                <a
                  href="#habilidades"
                  className="h-10 p-2 border-b-[1px] border-black"
                >
                  Habilidades/Tecnologias
                </a>
                <a
                  href="#projetos"
                  className="h-10 p-2 border-b-[1px] border-black"
                >
                  Projetos
                </a>
              </div>
            }
    </div>
  )
}

export default MenuHamburger