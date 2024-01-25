import React from 'react'
import './Contact.css'
import {BiPhone, BiLogoWhatsapp, BiLogoInstagram, BiLogoFacebook} from 'react-icons/bi'
import { useState } from 'react'

const Contact = () => {

    const [content, setContent] = useState([]);

    const handelContent =  (text) => {
        if (content.includes(text)){
            setContent(content.filter((txt) => txt !==text))
        } else {
            setContent([...content,text])
        }
    }

  return (
    <div className='contact_main_wrapper'>

        <div className='contact_us'>
            <h2>Contact Us</h2>
            <a href=""><BiPhone />+852 9149 8950</a>
            <a href="https://api.whatsapp.com/send/?phone=85291498950" target='_blank'><BiLogoWhatsapp />+852 9149 8950</a>
            <h2>Retail Store, Café & Grooming Opening hours</h2>
        </div>

        <div className={content.includes('about') ? 'contact_content active' : 'contact_content'}>
            <h2 onClick={()=>handelContent('about')}>About us</h2>
            <a href="">Who we are</a>
            <div className='social_media'>
                <a href="https://www.instagram.com/whiskersnpaws/" target='_blank'><BiLogoInstagram /></a>
                <a href="https://www.facebook.com/WhiskersNPaws/" target='_blank'><BiLogoFacebook /></a>
            </div>

        </div>

        <div className={content.includes('care') ? 'contact_content active' : 'contact_content'}>
            <h2 onClick={()=>handelContent('care')}>Customer Care</h2>
            <a href="">Who we are</a>
            <a href="">Who we are</a>
            <a href="">Who we are</a>
            <a href="">Who we are</a>
            <a href="">Who we are</a>
            <a href="">Who we are</a>
        </div>

        <div className={content.includes('service') ? 'contact_content active' : 'contact_content'}>
            <h2 onClick={()=>handelContent('service')}>Service</h2>
            <a href="">Who we are</a>
            <a href="">Who we are</a>
        </div>

        <div className={content.includes('community') ? 'contact_content active' : 'contact_content'}> 
            <h2 onClick={()=>handelContent('community')}>Community</h2>
            <a href="">Who we are</a>
            <a href="">Who we are</a>
        </div>
        
    </div>
  )
}

export default Contact