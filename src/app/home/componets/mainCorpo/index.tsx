import Image from "next/image";
import Aventura from "@/assets/images/aventura.png"
import Fabulas from "@/assets/images/fabulas.png"
import Lendas from "@/assets/images/lendas.png"
import { Rolagem } from "@/componetes/rolagens";
import Rectangle from "@/assets/images/Rectangle.png"


const histoias = [
    { id: '1', titulo: 'Filme 1', urlImage: Rectangle, descricao:"uma historia cheia de AVENTURAS uma historia cheia de AVENTURAS" },
    { id: '2', titulo: 'Filme 2', urlImage: Rectangle, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
    { id: '3', titulo: 'Filme 3', urlImage: Rectangle, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
    { id: '4', titulo: 'Filme 4', urlImage: Rectangle, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
    { id: '5', titulo: 'Filme 5', urlImage: Rectangle, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
    { id: '6', titulo: 'Filme 6', urlImage: Rectangle, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
    { id: '7', titulo: 'Filme 7', urlImage: Rectangle, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
    { id: '8', titulo: 'Filme 8', urlImage: Rectangle, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
  ];
export function MainCorpo(){

    return(
        <main className=" bg-[#ffffff]  p-1 pt-3 h-full w-full">
            <div className=" flex justify-around py-10  rounded-2xl bg-white ">               
                <div className="flex flex-col ">
                    <Image
                    className="w-20 rounded-full shadow-xl/20 h-20 md:h-48 md:w-48 
                    transition ease-in-out duration-300 hover:scale-125 "
                    src={Lendas}
                    alt="imagem do home do site"
                    />
                    <h1 className=" pt-2 md:text-2xl text-center font-bold">Lendas</h1>
                </div>
                
                <div className="flex flex-col ">
                    <Image
                    className="w-20 rounded-full shadow-xl/20 h-20 md:h-48 md:w-48
                    transition ease-in-out duration-300 hover:scale-125"
                    src={Fabulas}
                    alt="imagem do home do site"
                    />
                    <h1 className=" pt-2 md:text-2xl text-center font-bold">Fabulas</h1>
                </div>

                <div className="flex flex-col ">       
                    <Image
                    className="w-20 h-20 rounded-full shadow-xl/20 md:h-48 md:w-48
                    transition ease-in-out duration-300 hover:scale-125"
                    src={Aventura}
                    alt="imagem do home do site"
                    />
                    <h1 className=" pt-2 md:text-2xl text-center font-bold">Aventura</h1>
                </div>
            </div>
            <Rolagem titulo="historicos de historias!" historias={[...histoias].reverse()}/>
            <Rolagem titulo="Historias Novas!" historias={[...histoias].reverse()}/>


        </main>

    );
};