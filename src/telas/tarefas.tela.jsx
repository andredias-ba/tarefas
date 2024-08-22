import { TAREFAS } from '../constantes/tarefa'
import { ListaDeTarefas } from '../componentes'
import s from './tarefas.module.css'

export function TarefasTela() {
  return (
    <main className={s.tarefasTela}>
      <div className={s.container}>
        <ListaDeTarefas tarefas={TAREFAS} />
      </div>
    </main>
  )
}