import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { PageFazerPedido } from "./Pages/PageFazerPedido";
import { PageRepresentante } from "./Pages/PageRepresentante";
import { PageGerirRepresentante } from "./Pages/PageGerirRepresentante";
import { PageEmpresa } from "./Pages/PageEmpresa";
import { PageEstoque } from "./Pages/PageEstoque";
import { PageCliente } from "./Pages/PageCliente";
import { PageLogin } from "./Pages/PageLogin";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/pageFazerPedido" element={< PageFazerPedido/>}/>
                <Route path="/pageRepresentante" element={< PageRepresentante/>}/>
                <Route path="/pageEmpresa" element={< PageEmpresa/>}/>
                <Route path="/pageEstoque" element={< PageEstoque/>}/>
                <Route path="/pagecliente" element={< PageCliente/>}/>
                <Route path="/pagelogin" element={< PageLogin/>}/>
                <Route path="/pageGerirRepresentante" element={< PageGerirRepresentante/>}/>
                
            </Routes>
        </Router>
    )
}