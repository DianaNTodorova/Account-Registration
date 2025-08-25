import type { ReactElement } from "react"
import type { IFormData } from "../type"
import '../css/Form.css'

interface IFormDataProps {
    data: IFormData
    }
export const Form = ({data}:IFormDataProps):ReactElement => {
  return (
    <div className="form-container">
<h2>Register Account</h2>
    <form>
      <label htmlFor={data.firstName}>First Name</label>
      <input type="text" id="username" name={data.firstName} placeholder="Enter first name" required/>

      <label htmlFor={data.lastName}>Last Name</label>
      <input type="text" id="username" name={data.lastName} placeholder="Enter last name" required/>

      <label htmlFor={data.firstName}>Email</label>
      <input type="email" id="email" name={data.email} placeholder="Enter email" required/>

      <label htmlFor={data.password}>Password</label>
      <input type="password" id="password" name={data.password} placeholder="Enter password" required/>

      <button type="submit">Register</button>
    </form>
    </div>
  )
}