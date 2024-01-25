import React, { createContext,useEffect,useState } from 'react'
import prd1 from '../assests/prd1.png'
import axios from 'axios';
import prd_img from '../mysql_data/productLinks.json'
import Cookies from 'js-cookie';
import {  useQuery, useQueryClient } from '@tanstack/react-query';

//import { response } from 'express'; 
////
///
//
//WTF


export const ShopContext = createContext(null);



const ShopContextProvider  = (props) => {
  console.log('runnging')

    //const queryClient = useQueryClient();

    

    const cart = JSON.parse(localStorage.getItem('cart'));

//    const local_auth = JSON.parse(localStorage.getItem('auth'));

    const [cartItems, setCartItems] = useState(cart? cart:[]);

    const [showMenu , setShowMenu] = useState(false);

    const [productList , setProductList ] = useState([]);

    const [auth, setAuth] = useState(false);

    const [reviewRecord, setReviewRecord] = useState()

    const [profile, setProfile] = useState([]);

    const [exp, setExp] = useState(localStorage.getItem('refresh-token-exp') > Math.floor(Date.now()/1000));



/*
    useEffect(()=>{

        axios.get(process.env.REACT_APP_API_URL + '/review')
        .then((res)=>{
            console.log(res.data)
            setReviewRecord(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        

    },[])
*/

    const getReview = () => {
      return axios.get(process.env.REACT_APP_API_URL + '/review')
      .then((res)=>{
          console.log(res.data)
          return res.data
      })
    }

    axios.defaults.withCredentials = true;

    const getProduct =  ()=>{    
      return axios.get(process.env.REACT_APP_API_URL + "/api/get")
      .then((response)=>{
         const result = response.data.map((item)=>{
          const str = item.brand + ' ' + item.name
          item.image = prd_img[str]
          item.price_cal = item.price
        })
        console.log(result)
        console.log(response.data)
        console.log('caching')
        //setProductList(response.data)
        return response.data
      })

    }

    //const productQuery = useQuery({queryKey: ['productList'],queryFn: getProduct , staleTime: Infinity });

/*
    useEffect(()=> {

      axios.get(process.env.REACT_APP_API_URL + "/api/get")
      .then((response)=>{
        
        response.data.map((item)=>{
          const str = item.brand + ' ' + item.name
          item.image = prd_img[str]
        })
        
        setProductList(response.data)
      })


    },[])
*/



    useEffect(() => {
      if (cart) {
        setCartItems(cart);
      }
      if (Cookies.get('access-token')){ setAuth(true) }
//      if (local_auth){setAuth(local_auth)}
    }, []);
    
/*
    useEffect(()=>{
      localStorage.setItem("auth", JSON.stringify(auth));
    },[auth])
*/

    useEffect( ()=>{
      localStorage.setItem("cart", JSON.stringify(cartItems));
    },[cartItems]

    )

    const checking = (id) => {

      for(let i = 0; i < cartItems.length; i++) {
        if(cartItems[i].id===id){
          return true
        }
      }
      return false
    }

    const addAllToCart = (itemList) => {
//        id.quantity = 1;
      itemList.map((item)=>{
        setCartItems((prev) => [...prev,item])
      })

    };

    const addToCart = (id,quan) => {
      if(!checking(id.id)){
//        id.quantity = 1;

      setCartItems((prev) => [...prev,{...id,quantity : quan}])
      }
    };

    const increCart = (id) => {
        id.quantity ++;
      setCartItems((prev) => [...prev])
    };

    const decreCart = (id) => {
    if(id.quantity>1){
      id.quantity --;
    setCartItems((prev) => [...prev])
    }
  };

  const removeCart = (id) => {
    if(cartItems.includes(id)){

    setCartItems(cartItems.filter((item) => item !==id))

    }
  };

  const getTotal = () => {
    let total =0;
    if(cartItems.length===0){
      return 0
    }
    cartItems.forEach(item => {
      total += item.quantity*item.price
    });
    return total
  }

  const getQuantity = () => {
    let total =0;
    if(cartItems.length===0){
      return 0
    }
    cartItems.forEach(item => {
      total += item.quantity
    });
    return total
  }

  const getAvgScore = (reviewRecord) => {
    let total = 0;
    reviewRecord&&reviewRecord.map((record)=>{total+=record.score})
    return total/reviewRecord?.length
  }

    const contextValue = {
      cartItems,
      addToCart,
      increCart,
      decreCart,
      removeCart,
      getTotal,
      getQuantity,
      showMenu,
      setShowMenu,
      productList, getProduct,
      auth,
      setAuth,
      addAllToCart,
      reviewRecord, setReviewRecord, getAvgScore, getReview,
      profile, setProfile,
      exp, setExp
    
    }


  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
