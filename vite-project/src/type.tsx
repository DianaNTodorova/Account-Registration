export interface IFormData {
firstName: string 
lastName: string
email: string
password: string 
confirmPassword: string 
term:boolean
}

export interface IInputField {
    label?: string
    type: string
    name: string
    placeholder: string
    value: string
    required: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    id?: string
}
