interface Historia{
   historia:{ id: string,
    historia:String,
    titulo:String} | null;
}

export function TexHistoria({historia}:Historia){
    return(
        <div className=" flex flex-col pt-40 items-center justify-center w-7xl">
             <div >
                <h1 className=" text-shadow-xl pt-2 text-4xl md:text-6xl  font-extrabold font-baloo tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-sm">{historia?.titulo}o</h1>
            </div>
            <div className="pt-50 md:pt-[600px] pb-5 " >
                <div className="h-[700px] overflow-y-auto pb=10">
                <p className="text-[12] p-5 rounded-2xl opacity-75 md:text-2xl white-space:pre-line font-bold shadow-2xl  bg-white">
                           {historia?.historia}</p>
                        </div>
            </div>
        </div>
    );
};