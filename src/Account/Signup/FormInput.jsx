import React, { useState } from 'react'

const FormInput = ({title,name,pattern,err,onChange,value,type}) => {
    const [focused, setFocused] = useState(false);
  return (
    <div className='form_input_wrapper'>
        <p>{title}</p>
        <input type={type}  value={value} name={name} onChange={onChange}  required pattern={pattern} onBlur={()=>setFocused(true)} focused={focused.toString()} onFocus={()=>name==='confirm_password' && setFocused(true)}/>
        <span>{err}</span>
    </div>
  )
}

export default FormInput