import Image from "next/image";
import Link from "next/link";
import home from "@/assets/images/home.png"
import { Menu } from "./componets/menu";
export function Header(){

    
    return(
        <header className=" fixed top-0 z-50 right-0 w-full bg-[rgba(50,144,178,1)] px-2 py-2 ">
        <div className="w-full mx-auto px-2 lg:px-10 flex justify-between  items-center">
            <Image
                className="transition ease-in-out duration-300 hover:scale-125"
                src={home}
                width={52}  // Exemplo: 32 pixels
                height={52} // Exemplo: 32 pixels
                alt="imagem do home do site"
            />

            <Menu/>
        </div>
    </header>
    );
};