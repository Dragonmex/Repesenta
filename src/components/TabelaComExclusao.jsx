import { Response } from "miragejs";
import { useEffect } from "react"
import { api } from "../services/api";
import { Button } from "@material-tailwind/react";
import  removerIcon  from '../../src/assets/cancel_x.svg'

export function TabelaComExclusao({
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
                                Camilo Alves Mascarenhas de Almeida Pinto
                            </Button>
                        </td>
                        <td className="TableStyle">Comunista</td>
                        <td className="TableStyle">1</td>
                        <td className="TableStyle">Muito caro</td>
                        <td className="TableStyle">
                            <button onClick={apertouExcluir}> 
                                <img className=" inline h-10 w-10 mr-1" src={removerIcon} alt="Remover" />
                                
                            </button>
                        </td>
                    </tr>
                    <tr >
                        <td className="TableStyle">568974</td>
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
                                Brooklyn
                            </Button>
                        </td>
                        <td className="TableStyle">78 SteakBar  Avenida Alziro Pratés - Candeias, Vitória da Conquista - BA</td>
                        <td className="TableStyle">28/04/2022</td>
                        <td className="TableStyle"></td>
                        <td className="TableStyle">
                            <button onClick={apertouExcluir}> 
                                <img className=" inline h-10 w-10 mr-1" src={removerIcon} alt="Remover" />
                                
                            </button>
                        </td>
                    </tr>
                    <tr >
                        <td className="TableStyle">256541</td>
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
                                Restaurante Brasa Brasileira
                            </Button>
                        </td>
                        <td className="TableStyle">Avenida Jesiel Norberto - Candeias, Vitória da Conquista - BA </td>
                        <td className="TableStyle">12/03/2022 </td>
                        <td className="TableStyle"></td>
                        <td className="TableStyle">
                            <button onClick={apertouExcluir}> 
                                <img className=" inline h-10 w-10 mr-1" src={removerIcon} alt="Remover" />
                                
                            </button>
                        </td>
                    </tr>
                    <tr >
                        <td className="TableStyle">156879</td>
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
                                Churrascaria Picanha Na Brasa
                            </Button>
                        </td>
                        <td className="TableStyle">Avenida Olívia Flores - Candeias, Vitória da Conquista - BA  </td>
                        <td className="TableStyle">18/12/2021 </td>
                        <td className="TableStyle"></td>
                        <td className="TableStyle">
                            <button onClick={apertouExcluir}> 
                                <img className=" inline h-10 w-10 mr-1" src={removerIcon} alt="Remover" />
                                
                            </button>
                        </td>
                    </tr>
                    <tr >
                        <td className="TableStyle">554478</td>
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
                                Culinária Grill
                            </Button>
                        </td>
                        <td className="TableStyle">Avenida Ivo Freire - Candeias, Vitória da Conquista - BA  </td>
                        <td className="TableStyle">15/11/2021 </td>
                        <td className="TableStyle"></td>
                        <td className="TableStyle">
                            <button onClick={apertouExcluir}> 
                                <img className=" inline h-10 w-10 mr-1" src={removerIcon} alt="Remover" />
                                
                            </button>
                        </td>
                    </tr>
                    <tr >
                        <td className="TableStyle">165563</td>
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
                                Goró Bar
                            </Button>
                        </td>
                        <td className="TableStyle">Rua Dois - Candeias - Vitória da Conquista, BA  </td>
                        <td className="TableStyle">23/10/2021  </td>
                        <td className="TableStyle"></td>
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