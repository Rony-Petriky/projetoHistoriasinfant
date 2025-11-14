import Image, { StaticImageData } from "next/image";
import Aventura from "@/assets/images/aventura.png"
import Fabulas from "@/assets/images/fabulas.png"
import Lendas from "@/assets/images/lendas.png"
import { Rolagem } from "@/componetes/rolagens";
import Rectangle from "@/assets/images/Rectangle.png"
import Link from "next/link";




interface Historia {
    id:string,
    srcCapaMiniatura: string,
    titulo: string,
    descricao: string
}
interface PropHidtoria{
    historias: Historia[]
} 
export function MainCorpo({historias}:PropHidtoria){

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

                <Link href="/home/aventura">
                    <div className="flex flex-col ">       
                        <Image
                        className="w-20 h-20 rounded-full shadow-xl/20 md:h-48 md:w-48
                        transition ease-in-out duration-300 hover:scale-125"
                        src={Aventura}
                        alt="imagem do home do site"
                        />
                        <h1 className=" pt-2 md:text-2xl text-center font-bold">Aventura</h1>
                    </div>
                </Link>
            </div>
            <Rolagem titulo="historicos de historias!" historias={[...historias].reverse()}/>
            <Rolagem titulo="Historias Novas!" historias={[...historias].reverse()}/>


        </main>

    );
};