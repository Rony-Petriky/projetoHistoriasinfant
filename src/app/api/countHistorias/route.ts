import { NextResponse } from "next/server";
import  prismaClient  from "@/lib/prisma" ;

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { userId, historiaId } = data;

    if (!userId || !historiaId) {
      return NextResponse.json({ error: "usuario e historia são obrigatórios" }, { status: 400 });
    }

console.log(userId,"drpsraçao", historiaId)

    return NextResponse.json({mensage:"historia nao registrada"}, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao criar usuário" }, { status: 500 });
  }
}