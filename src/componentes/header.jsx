import {NavLink} from 'react-router-dom'
import s from './header.module.css'

export function Header() {
  return (
    <header className={s.cabecalho}>
      <div className={s.container}>
        <nav>
          <ul className={s.links}>
            <li>
             <NavLink to='/' className={s.link}> Tarefas </NavLink>
            </li>

            <li>
            <NavLink to='adicionar-tarefa' className={s.link}> Adicionar Tarefa </NavLink>              
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}