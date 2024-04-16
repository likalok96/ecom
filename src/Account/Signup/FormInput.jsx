import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";

const FormInput = ({title,name,pattern,err,onChange,value,type,autoComplete}) => {
    const [focused, setFocused] = useState(false);
    const [visible, setVisible] = useState(name.indexOf('password')<0 ? true : false);

    const regex_pattern = new RegExp(pattern)

  return (
    <div className='form_input_wrapper'>
        <p>{title}</p>
        <div>
          <input autoComplete={autoComplete} type={!visible ? type :'text'}  value={value} name={name} onChange={onChange}  required pattern={pattern} onBlur={()=>setFocused(true)} focused={focused.toString()} onFocus={()=>name==='confirm_password' && setFocused(true)}/>
          {!visible ? name.indexOf('password')>=0 && <FaRegEye className='password_eye' onClick={()=>{setVisible(!visible)}}/> 
            :
           name.indexOf('password')>=0 && <FaRegEyeSlash className='password_eye' onClick={()=>{setVisible(!visible)}}/> }
        </div>
        {(focused && (name!=='confirm_password' ? !regex_pattern.test(value) : value!==pattern) ) && <span>{err}</span>}
    </div>
  )
}

export default FormInput