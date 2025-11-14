import { Container } from "@/componetes/container";
import { Divolorida } from "@/componetes/diccolorida";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import prismaClient  from "@/lib/prisma";
interface Historia {
    id:string,
    srcCapaMiniatura: string,
    titulo: string,
    descricao: string
}
interface PropHidtoria{
    historias: Historia[]
} 
export default async function Aventura() {

    const session = await getServerSession(authOptions);
    // Redireciona se o usuário estiver logado
    if (!session || !session.user) {
    redirect("/");
    }

    const historias:Historia[] = await prismaClient.historia.findMany({
      where:{
          tipo: "aventura"
      }
  })
    return(
        <Container>
            <div className="" >
                <h1 className="text-5xl pb-5 font-bold">Aventura</h1>
                <ul className="flex flex-row flex-wrap">
                {historias.map( (historia) => ( 
                <li className="py-5" key={historia.id} >
                                  <Link href={`/story/${historia.id}`} >
                                    <Divolorida>
                                          <Image
                                              className="object-cover w-full h-56 md:h-[264px] 
                                              "
                                              src={historia.srcCapaMiniatura}
                                              alt={historia.descricao}
                                              width={400}
                                              height={400}
                                              
                                          />
                                          <div className="py-1 text-center">
                                          <h1 className="block text-[15px] font-bold text-gray-800 dark:text-white">{historia.titulo}</h1>
                                          <p className=" px-1 text-[10px] text-start text-gray-700 dark:text-gray-200">{historia.descricao}</p>
                                          </div>
                                    </Divolorida>
                                  </Link>
                                                     
                            </li> ))}
                            </ul>
            </div>
        </Container>
    );
};