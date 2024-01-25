import React, { useRef } from 'react'
import './Discount.css'
import {CgChevronRight} from 'react-icons/cg'
import emailjs from '@emailjs/browser';


const Discount = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wzxbn0d', 'template_tn0e75r', form.current, 'mulvB6cinVmQQ34kF')
          .then((result) => {
            console.log(result.text);
            console.log(form.current)
            alert('Email sent success');
        }, (error) => {
            console.log(error.text);
            alert(`${error.text} happened`)
        });
        e.target.reset()
      };

      


  return (
    <div className='discount_outer_wrapper'>
        <div className='discount_main_wrapper'>
            <div className='discount_text'>
                <h1>Get 10% Off!</h1>
                <p>Get 10 % discount off your First Order</p>
            </div>
            <div className='discount_email'>
                <form className='discount_email_form' ref={form} onSubmit={sendEmail} >
                    <input placeholder='Email' name='email' type="email" />
                    <button type='submit'><CgChevronRight /></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Discount