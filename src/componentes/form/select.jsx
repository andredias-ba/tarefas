import { Field } from "formik";
import s from './select.module.css'

export function Select({id, rotulo, options}) {
    //console.log(options)
    return (
        <div className={s.container}>
            <label htmlFor={id} className={s.rotulo}>
                {rotulo}
            </label>
            
            <Field as="select" id={id} className={s.select} name={id}>
                {
                    options.map((option) => (
                        <option key={option} value={option} disabled={option === 'Selecione'}>
                        {option}
                      </option>
                    ))}
            </Field>
        </div>
    )
}