import Image from "next/image";
import Aventura from "@/assets/images/aventura.png"
import Fabulas from "@/assets/images/fabulas.png"
import Lendas from "@/assets/images/lendas.png"
import { Rolagem } from "@/componetes/rolagens";


export function MainCorpo(){

    return(
        <main className=" bg-[#D3F2F6] p-5 h-full w-full">
            <div className=" flex justify-around py-10 rounded-2xl bg-white ">               
                <div className="flex flex-col">
                    <Image
                    className="w-20 h-20 md:h-48 md:w-48 
                    transition ease-in-out duration-300 hover:scale-125 "
                    src={Lendas}
                    alt="imagem do home do site"
                    />
                    <h1 className=" pt-2 md:text-2xl text-center font-bold">Lendas</h1>
                </div>
                
                <div className="flex flex-col">
                    <Image
                    className="w-20 h-20 md:h-48 md:w-48
                    transition ease-in-out duration-300 hover:scale-125"
                    src={Fabulas}
                    alt="imagem do home do site"
                    />
                    <h1 className=" pt-2 md:text-2xl text-center font-bold">Fabulas</h1>
                </div>

                <div className="flex flex-col">       
                    <Image
                    className="w-20 h-20 md:h-48 md:w-48
                    transition ease-in-out duration-300 hover:scale-125"
                    src={Aventura}
                    alt="imagem do home do site"
                    />
                    <h1 className=" pt-2 md:text-2xl text-center font-bold">Aventura</h1>
                </div>
            </div>
            <Rolagem/>

        </main>

    );
};