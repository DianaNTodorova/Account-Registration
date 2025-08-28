import type { ReactElement } from "react"
import type { IFormData } from "../type"
import '../css/checkbox.css'

interface ICheckboxProps {
    box:IFormData
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Checkbox = ({box,onChange}:ICheckboxProps):ReactElement => {

  return (
    <div className="checkbox-field">
    <input
    type="checkbox"
    id="terms"
    name="terms"
    checked={box.term}
    onChange={onChange}
    required
  />
  <label htmlFor="terms">
    I agree to the <a href="/terms">Terms & Conditions</a>
  </label>
  </div>
  )
}