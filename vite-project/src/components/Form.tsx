import { useState, type ReactElement } from "react"
import type { IFormData } from "../type"
import '../css/Form.css'
import { InputField } from "./InputField"
import { Checkbox } from "./Checkbox"

interface IFormDataProps {
    data: IFormData
    }
export const Form = ({ data } : IFormDataProps):ReactElement => {

   const [formData, setFormData]= useState<IFormData>({...data,term:false})
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(formData.password !== formData.confirmPassword) {
            alert("Passwords do not match") 
            return
        }
        if(!formData.term){
            alert("You must agree to the terms and conditions")
        }
        console.log(formData)
        alert("Form submitted successfully!")
        setFormData({...data,term:false})
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,type, value} = e.target
        setFormData({...formData, [name]: type==="checkbox" ? e.target.checked : value})
    }

  return (
    <div className="form-container">
    <h2>Register Account</h2>
    <form onSubmit={handleSubmit}>
<InputField field={{
    label:"First Name",
    type:"text",
    name:"firstName",
    placeholder:"Enter first name...",
    value:formData.firstName,
    required:true,
    onChange:handleChange,
    id:"firstname"
}} />
<InputField field={{
    label:"Last Name",
    type:"text",
    name:"lastName",
    placeholder:"Enter last name...",
    value:formData.lastName,
    required:true,
    onChange:handleChange,
    id:"lastname"
}} />
<InputField field={{
    label:"Email",
    type:"text",
    name:"email",
    placeholder:"Enter email...",
    value:formData.email,
    required:true,
    onChange:handleChange,
    id:"email"
}} />
<InputField field={{
    label:"Password",
    type:"password",
    name:"password",
    placeholder:"Enter password...",
    value:formData.password,
    required:true,
    onChange:handleChange,
    id:"password"
}} />
<InputField field={{
    label:"Confirm password",
    type:"password",
    name:"confirmPassword",
    placeholder:"Confirm password...",
    value:formData.confirmPassword,  
    required:true,
    onChange:handleChange,
    id:"confirmPassword"
}} />
<Checkbox box={formData} onChange={(e) => setFormData({...formData, term: e.target.checked})} />
      <button type="submit">Register</button>
    </form>
    </div>
  )
}