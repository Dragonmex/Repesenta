import { ChartLine } from "./ChartLine";
import { ChartBar } from "./ChartBar";
import { ChartBar2 } from "./ChartBar2";

export function BodyHomeEmpresa() {
    return (
        <div>
            <div className="px-5 pt-2">
                <h2 className=" text-cinza_escuro  font-roboto font-bold text-2xl ">
                    My dashboard
                </h2>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 grid-flow-row gap-4 p-6">
                <div className="col-span-2 grid grid-cols-3 grid-rows-1 grid-flow-row gap-2 p-1"> 
                    <div className="text-center bg-white shadow-md p-2 rounded-sm ">
                        <h1 className="text-center font-roboto font-bold text-xs text-cinza_escuro ">
                            Vendas Hoje
                        </h1>
                        <h1 className="text-center font-roboto font-bold text-3xl  text-cinza_escuro ">
                            74
                        </h1>
                        <h1 className="text-center font-roboto font-bold text-[0.60rem]  text-cinza_claro ">
                            Dia Anterior: 2000
                        </h1>
                    </div>
                    <div className="text-center bg-white shadow-md p-2 rounded-sm">
                    <h1 className="text-center font-roboto font-bold text-xs text-cinza_escuro ">
                            Meta do Mês
                        </h1>
                        <h1 className="text-center font-roboto font-bold text-3xl text-cinza_escuro ">
                            R$ 48K
                        </h1>
                        <h1 className="text-center font-roboto font-bold text-[0.60rem]  text-cinza_claro ">
                            Mês Anterior: 45k
                        </h1>
                    </div>
                    <div className="text-center bg-white shadow-md p-2 rounded-sm">
                    <h1 className="text-center font-roboto font-bold text-xs text-cinza_escuro ">
                            Novos Clientes
                        </h1>
                        <h1 className="text-center font-roboto font-bold text-3xl text-cinza_escuro ">
                            12
                        </h1>
                        <h1 className="text-center font-roboto font-bold text-[0.60rem]  text-cinza_claro ">
                            Mês Anterior: 9
                        </h1>
                    </div>
                </div>
                <div className="text-center bg-white shadow-md ">
                    <ChartBar />
                </div>
                <div className="text-center bg-white shadow-md col-span-2 row-span-2">
                    <ChartLine />
                </div>
                
                <div className="text-center bg-white shadow-md ">
                    <ChartBar2 />
                </div>
            </div>
        </div>
    )
}