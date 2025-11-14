import ClientHome from "@/componetes/clienthome";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // Redireciona se o usuário estiver logado
  if (session?.user) {
    redirect("/home");
  }

  // Renderiza o componente cliente com toda a UI interativa
  return <ClientHome />;
}
