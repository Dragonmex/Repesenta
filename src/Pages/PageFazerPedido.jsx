import { TabelaComExclusao } from "../components/TabelaComExclusao";
import { HeaderRepresentante } from "../components/HeaderRepresentante";
import { Button } from "@material-tailwind/react";
import  plusIcon  from '../../src/assets/mais_adicionar.svg'
import  minesIcon  from '../../src/assets/menos.svg'



export function PageFazerPedido() {
  return (
    <>
      <header>
        <HeaderRepresentante/>
      </header>
      <h1 className="max-w-sm mx-auto my-2 py-10 px-5 font-roboto font-bold text-center text-3xl text-cinza_escuro">
          Realizar Pedido
      </h1>
      <div className="flex max-w-2xl mx-auto justify-between py-1 px-5">
        <Button className="bg-laranja ">
          <img className="inline h-7 w-7 mr-1" src={plusIcon} alt="Adicionar" />
          <h1 className="inline px-9 text-sm">Adicionar produto</h1>
        </Button>
        <Button className="bg-laranja">
          <img className="inline h-7 w-7 mr-1" src={minesIcon} alt="Adicionar" />
          <h1 className="inline px-9 text-sm">Finaliza Pedido</h1>
        </Button>
      </div>
        <TabelaComExclusao 
                thcol1="Referencia"
                thcol2="Nome"
                thcol3="Descrição"
                thcol4="Qtd."
                thcol5="Valor"
        />
    </>
  );
}

