import React, { useContext, useEffect, useRef  } from 'react'
import './Login.css'
import {AiOutlineGoogle} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import { ShopContext } from '../../../Context/ShopContext'
import useLogin from '../../../hook/useLogin';


const Login = () => {

const {setExp} = useContext(ShopContext);

    const {login, google_login, user , setUser} = useLogin();
    const login2 = (e) =>{
        login(e)
        setExp(true)
    }

    const nameRef = useRef()
    const passwordRef = useRef()
    useEffect(()=>{
        nameRef.current.focus()
    },[])

  return (
    <div className='login_main_wrapper'>
        <div className='login_wrapper'>
            <p>Customer Sign In</p>
            <form onSubmit={login2} className='login_form'>
                <label >Name</label>
                <input ref={nameRef} name='name' autoComplete='username' onChange={(e)=> setUser({...user,name: e.target.value})} value={user.name}></input>

                <label >Password</label>
                <input ref={passwordRef} type='password' autoComplete='current-password' name='password' onChange={(e)=> setUser({...user,password: e.target.value})} value={user.password}></input>

                <a className='login_form_create' href="">Forget your password?</a>
                {/* disabled={(user.name && user.password ? false: true)}*/}
                <button type='submit' disabled={(user.name && user.password ? false: true)}>SIGN IN</button>

                <a className='login_form_create' href="/account/signup">Create account</a>

                <div className='hr_line'>
                    <hr/><div>OR</div><hr />
                </div>
                
            </form>
            <div className='login_social'>
                <span>Sign In With</span>
                <div className='login_social_button'>
                    <button className='facebook' ><BiLogoFacebook/>Facebook</button>
                    <button className='google' onClick={()=>google_login()}><AiOutlineGoogle/>Google</button>

                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Login