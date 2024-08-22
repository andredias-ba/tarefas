import { Field } from 'formik'
import s from './input.module.css'

export function Input({ id, rotulo, textoPlaceholder, tipo = 'text' }) {
  return (
    <div className={s.container}>
      <label className={s.rotulo} htmlFor={id}>
        {rotulo}
      </label>

      <div className={s.inputContainer}>
        <Field
          id={id}
          className={s.input}
          name={id}
          placeholder={textoPlaceholder}
          type={tipo}
        />
      </div>
    </div>
  )
}