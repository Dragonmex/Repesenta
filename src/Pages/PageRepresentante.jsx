import { StatusCard } from "../components/StatusCard"
import { HeaderRepresentante } from "../components/HeaderRepresentante";
import { InputSearch } from "../components/InputSearch";
import { TabelaSimples } from "../components/TabelaSimples";

export function PageRepresentante(){
    
    return(
        <>
            <header>
                <HeaderRepresentante />
            </header>
            <div className="bg-light-blue-500 pt-14 pb-10 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        <StatusCard
                            color="pink"
                            icon="fas fa-arrow-down"
                            title="Valor Despesas"
                            amount="350,897"
                            percentage="R$:3.000"
                            percentageIcon="arrow_upward"
                            percentageColor="red"
                            date="Orçamento Inicial"
                        />
                        <StatusCard
                            color="orange"
                            icon="fas fa-user-plus"
                            title="Novos Clientes"
                            amount="2"
                            percentage="8"
                            percentageIcon="arrow_downward"
                            percentageColor="green"
                            date="Ultimo Mês"
                        />
                        <StatusCard
                            color="purple"
                            icon="fas fa-dollar-sign"
                            title="Vendas"
                            amount="R$: 5.753"
                            percentage="1.236"
                            percentageIcon="arrow_downward"
                            percentageColor="green"
                            date="Vendas da semana"
                        />
                        <StatusCard
                            color="blue"
                            icon="fas fa-chart-line"
                            title="Performance"
                            amount="22,65%"
                            percentage="R$:30.000"
                            percentageIcon="arrow_upward"
                            percentageColor="orange"
                            date="Meta"
                        />
                    </div>
                </div>
            </div>
            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="max-w-3xl mt-20 mx-auto ">
                        <InputSearch tema="Buscar Vendas" />
                    </div>
                </div>
            </div>
            <div>
                <TabelaSimples 
                  thcol1="Ref. Pedido"
                  thcol2="Nome da Empresa"
                  thcol3="Endereço"
                  thcol4="Data"
                  thcol5="Obs." />
            </div>
        </>
    )
}