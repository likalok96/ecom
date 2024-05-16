import {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useRefresh from './useRefresh';

const useProfile = () => {


    const {axiosInstance} = useRefresh()

    const [profile, setProfile] = useState();

    const [confirm, setConfirm] = useState('');


    const navigate = useNavigate()


    const getProfile = ()=> {
        const token = {token: localStorage.getItem('access-token') || ''}
        axiosInstance.post(process.env.REACT_APP_API_URL + "/account/profile",token)
        .then((res)=>{
            console.log('profile')
            console.log(res.data)
            setProfile(res.data[0])
            return res.data[0]
        })
        .catch(err=>console.log('profile err'))
        
    }

    useEffect(()=>{

        getProfile()
        
// eslint-disable-next-line
    },[])


    
    const updateProfile = async (e)=> {
        e.preventDefault();

                const token = {token: localStorage.getItem('access-token') || ''}
                axiosInstance.put(process.env.REACT_APP_API_URL + "/account/profile/update",{'profile':profile, 'token':token})
                .then(()=>{
                    alert('Update Success');
                }
                ).catch(err=>err)

    }

    

    const updatePassword = (e) => {
        updateProfile(e)
        .then(()=>{
            localStorage.setItem("access-token", '')
            localStorage.setItem("refresh-token", '')
            navigate("/account/login");
        })
    }

    return {profile, confirm, setProfile, setConfirm, updateProfile, updatePassword, getProfile}


}

export default useProfile