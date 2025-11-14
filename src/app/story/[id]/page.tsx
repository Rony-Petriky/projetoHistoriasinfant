import { Container } from "@/componetes/container";
import { TexHistoria } from "../componets/texhistoria";
import { CampBotoes } from "../componets/cambotoes";
import DraggableDiv from "@/componetes/divflutuante";
import Image from "next/image";
import { AbrirFechar } from "@/componetes/abrirfechar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import {Main} from "@/lib/teste"
import prismaClient  from "@/lib/prisma";
import { GetServerSideProps } from "next";
interface Botao {
    id: string,
    srcImagem: string,
    srcSom: string
  }
  interface Historia{
    id: string,
    historia:String,
    titulo:String,
}
  type Props = {
    params: {
      id: string;
    };
  };



export default async function story({ params }: Props){

    const session = await getServerSession(authOptions);
    // Redireciona se o usuário estiver logado
    if (!session || !session.user) {
    redirect("/");
    }
    const { id } = await params;
  
    const historia = await prismaClient.historia.findUnique({
      where: { id },
      include: {
        historiaBotoes: {
          include: { botao: true }, // <- aqui você puxa o botão dentro da relação
        },
      },
    });
    const back = historia?.srcImagemFundo || "/assets/fundo_das_historias/chuvisco.jpeg"

    const botoes = historia?.historiaBotoes as []
    console.log("################",historia)

    return(
        <Container>
            <main className="my-2 px-2 md:px-40 relative w-full flex felx-row">
                <div className="absolute right-0 top-0 w-full h-full">
                    <Image
                    src={back}
                    alt="..."
                    fill
                    />
                    
                </div>
                <TexHistoria historia={historia}/>
                <AbrirFechar>
                    {botoes.length > 0 &&(
                        <CampBotoes botoes={[...botoes]} playForSeconds={5}/>
                    )}
                </AbrirFechar>

            </main>
        </Container>
    );
};


