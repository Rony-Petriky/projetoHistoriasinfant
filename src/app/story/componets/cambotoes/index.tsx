
import TimedAudioPlayer from "@/componetes/sombotao";


type Botao = {
  id: string
  nome: string
  srcImagem: string
  srcSom: string
  status: string
  createdAt: Date
  updatedAt: Date
}

type HistoriaBotao = {
  id: string
  createdAt: Date
  historiaId: string
  botaoId: string
  botao: Botao
}

interface CampBotoesProps {
  botoes: HistoriaBotao[]
  playForSeconds: number
}
export function CampBotoes({botoes, playForSeconds}: CampBotoesProps){
  console.log(botoes)
    return(
        <div className="nd:w-64 w-54 md:h-52 h-44 rounded-2xl  flex-wrap p-5 bg-amber-500 flex justify-around">
          {botoes.map((botao) => (
                <div key={botao.id}>
                  <TimedAudioPlayer srcImage={botao.botao.srcImagem} playForSeconds={playForSeconds} srcSom={botao.botao.srcSom}/>
        </div>
          ))}
   
        
        </div>
    );
};
