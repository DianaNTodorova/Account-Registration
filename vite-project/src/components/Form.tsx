import { useState, type ReactElement } from "react"
import type { IFormData } from "../type"
import '../css/Form.css'
import { InputField } from "./InputField"

interface IFormDataProps {
    data: IFormData
    }
export const Form = ({ data } : IFormDataProps):ReactElement => {

   const [formData, setFormData]= useState<IFormData>(data)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(formData.password !== formData.confirmPassword) {
            alert("Passwords do not match") 
            return
        }
        console.log(formData)
        alert("Form submitted successfully!")
    setFormData(data)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
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
    id:"conformPassword"
}} />
      <button type="submit">Register</button>
    </form>
    </div>
  )
}