import  lupa  from '../../src/assets/lupa.svg'
import { Input } from "@material-tailwind/react";

export function InputSearch({
    tema,
}){

    return(
        <input 
        className="
          appearance-none 
          block w-full  p-3 mb-12
          leading-5 text-coolGray-900 
          border border-orange-200 
          rounded-full shadow-md 
          placeholder-orange-200
          focus:outline-none 
          focus:ring-2 
          focus:ring-orange-600
          focus:ring-opacity-50" 
        type="
          text" 
        placeholder={tema}  
        />
        
    )
}