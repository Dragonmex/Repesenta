import { Header } from "../components/HeaderEmpresa";
import { TabelaEstoque } from "../components/TabelaEstoque";
import { InputSearch } from "../components/InputSearch";
import { Button } from "@material-tailwind/react";
import  Modal from 'react-modal'
import { useState } from 'react'
import  ArqIcon  from '../../src/assets/folha_papel.svg'


export function PageEstoque() {

  const [isCadastrarProdutoModalOpen,setIsCadastrarProdutoModalOpen] = useState(false);

  function handleOpenCadastrarProduto(){
      setIsCadastrarProdutoModalOpen(true);
  }
  function handleCloseCadastrarProduto(){
      setIsCadastrarProdutoModalOpen(false);
  }

  return (
    <>
        <header>
          <Header />
        </header>
        <div>
          <h1 className="max-w-sm mx-auto my-2 py-10 px-5 font-roboto font-bold text-center text-3xl text-cinza_escuro">
            Gestor Estoque
          </h1>
          <div className="max-w-3xl mt-8 mx-auto ">
            <InputSearch tema="Buscar Produto"/>
          </div>
          <div className="flex max-w-6xl mx-auto justify-left py-1 px-5">
            <Button className="bg-laranja " onClick={handleOpenCadastrarProduto}>
              <img className="inline h-7 w-7 mr-1" src={ArqIcon} alt="Adicionar" />
              <h1 className="inline px-9 text-sm">Adicionar produto</h1>
            </Button>
          </div>
          <div>
            <TabelaEstoque 
                  thcol1="Referencia"
                  thcol2="Nome"
                  thcol3="Descrição"
                  thcol4="Qtd."
                  thcol5="Valor"
            />
          </div>
        </div>
        <Modal 
                isOpen={isCadastrarProdutoModalOpen} 
                onRequestClose={handleCloseCadastrarProduto}
        >
                <h5>Cadastrar Produto</h5>
        </Modal>
    </>
  );
}

