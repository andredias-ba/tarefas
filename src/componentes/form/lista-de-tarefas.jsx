import { Tarefa } from './tarefa'
import s from './lista-de-tarefas.module.css'

export function ListaDeTarefas({ tarefas, titulo = 'Lista de Tarefas' }) {
  function renderizarTarefas() {
    if (tarefas.length > 0) {
      return (
        <ul className={s.tarefas}>
          {tarefas.map((tarefa) => (
            <Tarefa
              key={tarefa.id}
              id={tarefa.id}
              titulo={tarefa.titulo}
              descricao={tarefa.descricao}
              prioridade={tarefa.prioridade}
              data={tarefa.data}
              responsaveis={tarefa.responsaveis}
            />
          ))}
        </ul>
      )
    }

    return <p className={s.nenhumaTarefa}>Nenhuma tarefa encontrada.</p>
  }

  return (
    <div className={s.listaDeTarefas}>
      <h1 className={s.titulo}>{titulo}</h1>

      {renderizarTarefas()}
    </div>
  )
}