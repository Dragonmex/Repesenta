import { Response } from "miragejs";
import { useEffect } from "react"
import { api } from "../services/api";
import { Button } from "@material-tailwind/react";
import  removerIcon  from '../../src/assets/cancel_x.svg'

export function TabelaSimples({
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
        console.log("AbrirInformações")
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
                        <td className="TableStyle">Avenida Ivo Freire - Candeias, Vitória da Conquista - BA</td>
                        <td className="TableStyle">15/11/2021</td>
                        <td className="TableStyle"></td>
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
                        <td className="TableStyle">Avenida Olívia Flores - Candeias, Vitória da Conquista - BA</td>
                        <td className="TableStyle">18/12/2021</td>
                        <td className="TableStyle"></td>
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
                        <td className="TableStyle">Avenida Ivo Freire - Candeias, Vitória da Conquista - BA</td>
                        <td className="TableStyle">15/11/2021</td>
                        <td className="TableStyle"></td>
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
                        <td className="TableStyle">Avenida Olívia Flores - Candeias, Vitória da Conquista - BA</td>
                        <td className="TableStyle">18/12/2021</td>
                        <td className="TableStyle"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}