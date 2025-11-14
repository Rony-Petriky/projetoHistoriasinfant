import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function Main() {

    // ID da História que você quer associar aos botões
    const historiaId = "690bea8fe4123ae54b172998";

    // IDs dos botões que você quer conectar
    const botoesIds = ["690bdab142d7f28d5a3bc3e1", "690bdab142d7f28d5a3bc3e2", "690bdab142d7f28d5a3bc3e3"];

    // Atualiza a história e conecta os botões existentes
    for (const botaoId of botoesIds) {
      await prisma.botaoHistoria.create({
        data: {
          historiaId,
          botaoId,
        },
      });

    console.log("História atualizada com sucesso:");
  
  } 
}

Main();
