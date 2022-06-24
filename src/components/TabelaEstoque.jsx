import { Response } from "miragejs";
import { useEffect } from "react"
import { api } from "../services/api";
import { Button } from "@material-tailwind/react";
import  plusIcon from '../../src/assets/mais_adicionar.svg'
import  minesIcon from '../../src/assets/menos.svg'

export function TabelaEstoque({
    thcol1,
    thcol2,
    thcol3,
    thcol4,
    thcol5,
    
}){
    useEffect(() => {
        api.get('produtos')
        .then(response => console.log(response.data))
    },[]);

    function apertou(){
        console.log("apertou")
    }
    function apertouAdicionar(){
        console.log("Exclui")
    }
    function apertouRemover(){
        console.log("Exclui")
    }


    return(
        <div className="max-w-6xl mt-8 mx-auto  px-4">
            <table className=" w-full border-separate border-spacing-x-0 border-spacing-y-2 ">
                <thead className=" leading leading-loose text-cinza_escuro font-roboto font-normal py-4 px-8 ">
                    <tr>
                        <th>{thcol1}</th>
                        <th>{thcol2}</th>
                        <th>{thcol3}</th>
                        <th>{thcol4}</th>
                        <th>{thcol5}</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr >
                        <td className="TableStyle">985416</td>
                        <td className="TableStyle">
                            <Button
                                className="
                                    TableStyle
                                    bg-transparent
                                    shadow-transparent
                                    py-0
                                    px-0
                                    hover:shadow-transparent
                                "
                                onClick={apertou}
                            >
                                Filemignon
                            </Button>
                        </td>
                        <td className="TableStyle">Cote Fino Maturado</td>
                        <td className="TableStyle">10kg</td>
                        <td className="TableStyle">1.121</td>
                        <td className="TableStyle">
                            <button onClick={apertouAdicionar}> 
                                <img className=" inline h-10 w-10 mr-1" src={plusIcon} alt="Adicionar" />
                                
                            </button>
                        </td>
                        <td className="TableStyle">
                            <button onClick={apertouRemover}> 
                                <img className=" inline h-10 w-10 mr-1" src={minesIcon} alt="Remover" />
                                
                            </button>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}