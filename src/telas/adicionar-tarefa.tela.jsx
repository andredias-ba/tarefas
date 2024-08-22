import { TAREFAS } from '../constantes/tarefa'
import { Formulario, ListaDeTarefas } from '../componentes'
import s from './adicionar-tarefa.module.css'

export function AdicionarTarefas() {
    return (
        <main className={s.adicionarTarefaTela}>
        <div className={s.container}>
            <Formulario />
            <ListaDeTarefas tarefas={TAREFAS} titulo='Tarefas Recentes' />
        </div>
        </main>
    )
}