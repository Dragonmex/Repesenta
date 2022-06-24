import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer } from 'miragejs'
import { App }  from './App';
import { ThemeProvider } from "@material-tailwind/react";

import './global.css';


createServer({
  routes() {
    this.namespace = 'api';

    this.get('/produtos', () => {
      return [
        {
          referencia: 1,
          nome: 'Camilo Alves Mascarenhas de Almeida Pinto',
          Descricao: 'Comunista',
          Qtd: 1,
          Valor: 'muito caro'
        }
      ]
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ThemeProvider>
    <App />
  </ThemeProvider>
  
)
