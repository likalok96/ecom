import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const baseURL = 'http://localhost:3001'


const useRefresh = ()=>{

    const [logged,setLogged] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();
    
    const accessToken = localStorage.getItem('access-token') ?? null
    const refreshToken = localStorage.getItem('refresh-token') ?? null

    const axiosInstance = axios.create({baseURL,body:{token: accessToken}})

    const axios_res = axiosInstance.interceptors.response.use((res)=>{
        return res
    },
    (err)=>{

            axiosInstance.interceptors.response.eject(axios_res);
            if(!refreshToken) return navigate("/account/login",{ state: {location} })
            const { response, config } = err

            if (response.status === 401){
                

                return axios.post(process.env.REACT_APP_API_URL +"/refresh",{token: refreshToken})
                .then((res)=>{
                    
                        if(res.data.Status=="Auth Expired"){
                            navigate("/account/login",{ state: {location} })

                        }
                        else{

                            const accessToken = res.data.Token
                            localStorage.setItem("access-token", accessToken)
                            config.data = {...JSON.parse(config.data),token:accessToken}

                            
                            //if(config.data?.profile) return axiosInstance(config).then(localStorage.setItem("access-token", '')) 
                            
                            
                            return axiosInstance(config)

                        }
                    })
                    
                    .catch((err) => {
                        return Promise.reject(err)
                    })
                    
            }
            return Promise.reject(err)
    }
        
    )
    return {logged, setLogged, axiosInstance}
}

export default useRefresh

