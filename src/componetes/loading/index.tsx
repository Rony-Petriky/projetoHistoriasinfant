import { FiLoader } from "react-icons/fi";

export function Load(){
    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <button className="animate-spin">
        <FiLoader size={52} color="#4b5563" />
      </button>
      </div>
    )
};