import { Container } from "@/componetes/container"
import  {Carrossel}  from "@/componetes/carrossel";

import image1 from "@/assets/images/carrossel/carousel-1.svg"
import image2 from "@/assets/images/carrossel/carousel-2.svg"
import image3 from "@/assets/images/carrossel/carousel-3.svg"
import image4 from "@/assets/images/carrossel/carousel-4.svg"
import image5 from "@/assets/images/carrossel/carousel-5.svg"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

const histoias = [
  { id: '1', titulo: 'Filme 1', urlImage: image1, descricao:"uma historia cheia de AVENTURAS uma historia cheia de AVENTURAS" },
  { id: '2', titulo: 'Filme 2', urlImage: image2, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
  { id: '3', titulo: 'Filme 3', urlImage: image3, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
  { id: '4', titulo: 'Filme 4', urlImage: image4, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
  { id: '5', titulo: 'Filme 5', urlImage: image5, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
  
];

const SLIDES = Array.from(Array(5).keys())
export default async function historias(){
    const session = await getServerSession(authOptions);
    // Redireciona se o usuário estiver logado
    if (!session || !session.user) {
    redirect("/");
    }
    return(
        <Container>
            <Carrossel historias={[...histoias]}/>
        </Container>

    );
};