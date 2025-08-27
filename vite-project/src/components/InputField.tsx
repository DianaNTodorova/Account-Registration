import { type ReactElement } from 'react';
import type { IInputField } from '../type'

interface IInputFieldProps {
    field: IInputField
}

export const InputField = ({field}:IInputFieldProps):ReactElement => {
const {label, type, name, placeholder, value, required, onChange, id} = field
  return (
<div className="input-field">
    <label htmlFor={label}>{label}</label>
    <input type={type} id={id} name={name} placeholder={placeholder} value={value} required={required} onChange={onChange}/>
</div>
  )
}