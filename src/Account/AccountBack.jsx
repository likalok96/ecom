import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import './AccountBack.css'

const AccountBack = ({url,text}) => {
  return (
    <div className='account_back'>
        <a href={url}><AiOutlineArrowLeft /></a>
        <p>{text}</p>
    </div>  
)
}

export default AccountBack