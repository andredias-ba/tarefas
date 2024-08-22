import { Field } from 'formik'
import s from './responsaveis.module.css'
import { RESPONSAVEIS } from '../../constantes/responsaveis.js'

export function Responsaveis({id}) {
  return (
    <div className={s.container}>
      <label className={s.rotuloContainer}>Responsáveis</label>
          
      <div className={s.responsaveis}>
         {RESPONSAVEIS.map((responsavel) =>(
           
           <div className='s.responsaveis' key={responsavel}>
            <Field 
            id={responsavel} 
            name={id} 
            type="checkbox" 
            value={responsavel} 
          />
          
          <label className={s.rotuloResponsavel} htmlFor={responsavel}>
             {responsavel}
          </label>
          </div>

        ))}

      </div>
    </div>
  )
}