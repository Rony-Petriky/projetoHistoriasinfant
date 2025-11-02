import { Container } from "@/componetes/container";
import { TexHistoria } from "./componets/texhistoria";
import { CampBotoes } from "./componets/cambotoes";
import DraggableDiv from "@/componetes/divflutuante";
import Image from "next/image";
import { AbrirFechar } from "@/componetes/abrirfechar";
const botoes = [
    {id:"1", image:"/assets/images/botoes/agua.png", som:"/assets/sons/gotas-de-agua.mp3"},
    {id:"2", image:"/assets/images/botoes/Coraçao_sorriso.png", som:"/assets/sons/tum-tum.mp3"}

  ]
export default function story(){
    return(
        <Container>
            <main className=" my-2 px-2 md:px-40 relative w-full flex felx-row bg-[url('/assets/fundo_das_historias/chuvisco.jpeg')]">
                <div className="absolute right-0 top-0 w-full h-full">
                    <Image
                    src="/assets/fundo_das_historias/chuvisco.jpeg"
                    alt="..."
                    fill
                    />
                    
                </div>
                <TexHistoria/>
                <AbrirFechar>
                    <CampBotoes botoes={[...botoes]} playForSeconds={5}/>
                </AbrirFechar>

            </main>
        </Container>
    );
};