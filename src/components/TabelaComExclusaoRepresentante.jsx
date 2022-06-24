import { Response } from "miragejs";
import { useEffect } from "react"
import { api } from "../services/api";
import { Button } from "@material-tailwind/react";
import  removerIcon  from '../../src/assets/cancel_x.svg'

export function TabelaComExclusaoRepresentante({
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
    function apertouExcluir(){
        console.log("Exclui")
    }

    return(
        <div className="max-w-6xl mt-10 mx-auto  px-4">
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
                        <td className="TableStyle">02.103.789/0001-39</td>
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
                                Eduardo dos Anjos Pereira
                            </Button>
                        </td>
                        <td className="TableStyle">Rua das Acácias, 121, Candeias, Vitória da Conquista - BA</td>
                        <td className="TableStyle">Indisponivel</td>
                        <td className="TableStyle">77 98879-5648</td>
                        <td className="TableStyle">
                            <button onClick={apertouExcluir}> 
                                <img className=" inline h-10 w-10 mr-1" src={removerIcon} alt="Remover" />
                                
                            </button>
                        </td>
                    </tr>
                    <tr >
                        <td className="TableStyle">09.256.489/0001-42</td>
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
                                Camilo Alves Mascarenhas de Almeida
                            </Button>
                        </td>
                        <td className="TableStyle">Rua Marta Vasconcelos, 189, Centro, Vitória da Conquista - BA</td>
                        <td className="TableStyle">Disponivel</td>
                        <td className="TableStyle">77 98864-5569</td>
                        <td className="TableStyle">
                            <button onClick={apertouExcluir}> 
                                <img className=" inline h-10 w-10 mr-1" src={removerIcon} alt="Remover" />
                                
                            </button>
                        </td>
                    </tr>
                    <tr >
                        <td className="TableStyle">03.453.754/0002-17</td>
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
                                Thyerri Pires Mariniello
                            </Button>
                        </td>
                        <td className="TableStyle">Rua das Macieiras, 78, Recreio, Vitória da Conquista - BA</td>
                        <td className="TableStyle">Indisponivel</td>
                        <td className="TableStyle">73 98546-4556</td>
                        <td className="TableStyle">
                            <button onClick={apertouExcluir}> 
                                <img className=" inline h-10 w-10 mr-1" src={removerIcon} alt="Remover" />
                                
                            </button>
                        </td>
                    </tr>
                    <tr >
                        <td className="TableStyle">01.895.785/0003-13</td>
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
                                Adrian Trajano de Almeida Silva
                            </Button>
                        </td>
                        <td className="TableStyle">Rua dos Coqueiros, 13, Camacã, Itapetinga - BA</td>
                        <td className="TableStyle">Disponivel</td>
                        <td className="TableStyle">75 98366-4786</td>
                        <td className="TableStyle">
                            <button onClick={apertouExcluir}> 
                                <img className=" inline h-10 w-10 mr-1" src={removerIcon} alt="Remover" />
                                
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}