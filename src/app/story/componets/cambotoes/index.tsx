
import TimedAudioPlayer from "@/componetes/sombotao";


interface Botao {
  id:string,
  image:string,
  som:string
}
type HistProps = {
  playForSeconds : number,
  botoes: Botao[]
}
export function CampBotoes({botoes, playForSeconds}: HistProps){
   
    return(
        <div className="nd:w-64 w-54 md:h-52 h-44 rounded-2xl p-5 bg-amber-500 flex justify-around">
          {botoes.map((botao) => (
                <div key={botao.id}>
                  <TimedAudioPlayer srcImage={botao.image} playForSeconds={playForSeconds} srcSom={botao.som}/>
        </div>
          ))}
   
        
        </div>
    );
};
