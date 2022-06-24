import { Header } from "../components/HeaderEmpresa";
import  Modal from 'react-modal'
import { useState } from 'react'
import { InputSearch } from "../components/InputSearch"
import { Button } from "@material-tailwind/react";
import  plusIcon  from '../../src/assets/mais_adicionar.svg'
import { TabelaComExclusaoRepresentante } from "../components/TabelaComExclusaoRepresentante"

export function PageGerirRepresentante() {

  const [isCadastrarRepresentanteModalOpen,setIsCadastrarRepresentanteModalOpen] = useState(false);

  function handleOpenCadastrarRepresentante(){
      setIsCadastrarRepresentanteModalOpen(true);
  }
  function handleCloseCadastrarRepresentante(){
      setIsCadastrarRepresentanteModalOpen(false);
  }

  return (
    <>
        <header>
          <Header />
        </header>
        <div>
          <h1 className="max-w-sm mx-auto my-2 py-10 px-5 font-roboto font-bold text-center text-3xl text-cinza_escuro">
            Gerir Representantes
          </h1>
          <div className="max-w-3xl mt-8 mx-auto ">
            <InputSearch tema="Buscar Produto"/>
          </div>
          <div className="flex max-w-6xl mx-auto justify-center py-1 px-5">
            <Button className="bg-laranja " onClick={handleOpenCadastrarRepresentante}>
              <img className="inline h-7 w-7 mr-1" src={plusIcon} alt="Adicionar" />
              <h1 className="inline px-9 text-sm">Cadastrar Novo Representante</h1>
            </Button>
          </div>
          <div>
            <TabelaComExclusaoRepresentante
                  thcol1="CNPJ"
                  thcol2="Nome"
                  thcol3="Endereço"
                  thcol4="Status"
                  thcol5="Contato"
            />
          </div>
        </div>
        <Modal 
          isOpen={isCadastrarRepresentanteModalOpen} 
          onRequestClose={handleCloseCadastrarRepresentante}
        >
          <h5>Cadastrar Representante</h5>
        </Modal>
    </>
  );
}

