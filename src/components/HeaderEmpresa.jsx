import { Button } from '@material-tailwind/react'
import  plusIcon  from '../../src/assets/mais_adicionar.svg'
import  personIcon  from '../../src/assets/pessoa_representantes.svg'
import  caixa_estoque  from '../../src/assets/caixa_estoque.svg'
import  personOut  from '../../src/assets/pessoa_sair.svg'
import { useNavigate } from "react-router-dom";
import  Modal from 'react-modal'
import { useState } from 'react'


Modal.setAppElement('#root')

export function Header() {
    const [isCadastrarAdmModalOpen,setIsCadastrarAdmModalOpen] = useState(false);

    function handleOpenCadastrarAdm(){
        setIsCadastrarAdmModalOpen(true);
    }
    function handleCloseCadastrarAdm(){
        setIsCadastrarAdmModalOpen(false);
    }
    
    let navigate = useNavigate();
    function handleClickRepresentante() {
        navigate("/pageGerirRepresentante");
    }

    function handleClickEstoque() {
        navigate("/pageEstoque");
    }

    function handleClickLogin() {
        navigate("/pageLogin");
    }
    function handleClickLogo() {
        navigate("/pageEmpresa");
    }



    return (
       <div className=" bg-laranja relative px-4 py-1 sm:px-12 " color="blue-grey">
        <div className=" flex items-center justify-between">
            <div>
                <h1 className=" text-white  font-play text-2xl " onClick={handleClickLogo}>REPRESENTA</h1>
            </div>
            <div>
                <Button className="ButtonStyle" onClick={handleOpenCadastrarAdm}>
                    <img className="inline h-7 w-7 mr-1" src={plusIcon} alt="Adicionar" />
                    <h1 className="inline">Cadastra Administrador</h1>
                </Button>
                <Button className="ButtonStyle" onClick={handleClickRepresentante}>
                    <img className="inline h-7 w-7 mr-1" src={personIcon} alt="Adicionar" />
                    <h1 className="inline">Representantes</h1>
                </Button>
                <Button className="ButtonStyle" onClick={handleClickEstoque}>
                    <img className="inline h-7 w-7 mr-1" src={caixa_estoque} alt="Adicionar" />
                    <h1 className="inline">Estoque</h1>
                </Button>
                <Button className="ButtonStyle" onClick={handleClickLogin}>
                    <img className="inline h-8 w-8 mr-1 rounded-full" src={personOut} alt="Adicionar" />
                    <h1 className="inline">Sair</h1>
                </Button>
            </div>
        </div>
            <Modal 
                isOpen={isCadastrarAdmModalOpen} 
                onRequestClose={handleCloseCadastrarAdm}
            >
                <h5>Cadastrar Administrador</h5>
            </Modal>
       </div>
    )
}