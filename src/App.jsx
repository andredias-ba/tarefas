import { Routes, Route } from 'react-router-dom'

import { Formulario } from './componentes/form/formulario'
import { Header } from './componentes/header'
import s from './app.module.css'
import { AdicionarTarefas } from './telas/adicionar-tarefa.tela.jsx'
import { TarefasTela } from './telas/tarefas.tela'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<TarefasTela />} />
        <Route path='adicionar-tarefa' element={<AdicionarTarefas />} />
        <Route path='*' element={<TarefasTela />} />
      </Routes>

    </> 
  )
}

export default App