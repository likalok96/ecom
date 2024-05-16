import React, { createContext,useEffect,useState } from 'react'
import axios from 'axios';
import prd_img from '../utils/data/productLinks.json'
import Cookies from 'js-cookie';
import createProduct from '../utils/ProductFn/createProduct';


export const ShopContext = createContext(null);


const ShopContextProvider  = (props) => {


    const cart = JSON.parse(localStorage.getItem('cart'));


    const [cartItems, setCartItems] = useState(cart? cart:[]);

    const wishlist = JSON.parse(localStorage.getItem('wishlist'));

    const [wishItems, setWishItems] = useState(wishlist ? wishlist:{});

    const [showMenu , setShowMenu] = useState(false);

//    const [productList , setProductList ] = useState([]);

    const [auth, setAuth] = useState(false);

    const [reviewRecord, setReviewRecord] = useState()

    const [profile, setProfile] = useState([]);

    const [exp, setExp] = useState(localStorage.getItem('refresh-token-exp') > Math.floor(Date.now()/1000));


    const [showSearch, setShowSearch] =  useState(false);

    const [search, setSearch] = useState('')

    axios.defaults.withCredentials = true;
    axios.defaults.headers.common["Pragma"] = "no-cache";
    axios.defaults.headers.common["Cache-Control"] = "no-cache";

    const getReview = () => {
      return axios.get(process.env.REACT_APP_API_URL + '/review/')
      .then((res)=>{
          return res.data
      })
    }



    const getProduct = ()=>{    
      return axios.get(process.env.REACT_APP_API_URL + "/api/get/",{headers:{'Pragma': 'no-cache','Cache-control':'no-cache'}})
      .then((response)=>{
         const result = response.data.map((item)=>{
           const str = item.brand + ' ' + item.name
          item.image = prd_img[str]
          item.price_cal = item.price
         // createProduct(item)
          
        })
        //console.log(result)
        return response.data
      })

    }






    useEffect(() => {
      if (cart) {
        setCartItems(cart);
      }
      if (Cookies.get('access-token')){ setAuth(true) }
    }, []);
    

    useEffect( ()=>{
      localStorage.setItem("wishlist", JSON.stringify(wishItems));
    },[wishItems]

    )

    const handleWishlist = (prd)=> {
  
      if(wishItems[prd.id]) 
      {
        delete wishItems[prd.id]
        setWishItems((prev)=>({...prev}))
        return 
      }
      setWishItems((prev)=>({...prev,[prd.id]:prd}))      
  
    }

    
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
      itemList.forEach((item)=>{
        setCartItems((prev) => [...prev,item])
      })

    };

    const addToCart = (id,quan) => {
      if(!checking(id.id)){

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
    reviewRecord&&reviewRecord.forEach((record)=>{total+=record.score})
    return total/reviewRecord?.length
  }

    const contextValue = {
      wishItems,
      setWishItems,
      handleWishlist,
      cartItems,
      addToCart,
      increCart,
      decreCart,
      removeCart,
      getTotal,
      getQuantity,
      showMenu,
      setShowMenu,
//      productList,
      getProduct,
      auth,
      setAuth,
      addAllToCart,
      reviewRecord, setReviewRecord, getAvgScore, getReview,
      profile, setProfile,
      exp, setExp,
      showSearch, setShowSearch,
      search,setSearch
    
    }


  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
