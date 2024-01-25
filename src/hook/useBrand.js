import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import prd_img from '../mysql_data/productLinks.json'
const useBrand = ({category}) => {

  const {productList,getProduct} = useContext(ShopContext);
  //const {data} = productQuery
  //const productList = data
  /*
  axios.defaults.withCredentials = true;

  const getProduct =  ()=>{    
    return axios.get(process.env.REACT_APP_API_URL + "/api/get")
    .then((response)=>{
       const result = response.data.map((item)=>{
        const str = item.brand + ' ' + item.name
        item.image = prd_img[str]
      })
      console.log(result)
      console.log(response.data)
      console.log('caching')
      return response.data
    })

  }
*/
  const productQuery = useQuery({queryKey: ['productList'],queryFn: getProduct});

    const [brandList , setBrandList] = useState();
    const [filterBrand, setFilterBrand] = useState('');
    //const [filteredList , setFilteredList] = useState([]);

    let filteredList = productQuery?.data?.filter((prd)=>prd.category.toLowerCase().indexOf(category.toLowerCase())!==-1)

    filteredList = filteredList?.filter((prd)=>prd.brand.toLowerCase().indexOf(filterBrand.toLowerCase())!==-1)
  
  
  
    useEffect(() =>{
      let set = new Set()
      
      //productList && setFilteredList(productList.filter((prd)=>(prd.category.toLowerCase().indexOf(category.toLowerCase())!==-1 && prd.brand.toLowerCase().indexOf(filterBrand.toLowerCase())!==-1)))

      filteredList && filteredList.map((prd)=>set.add(prd.brand))
      
      setBrandList([...set])
      console.log('cate: '+ brandList)
  
    },[productQuery.data])

    return {brandList, filterBrand, filteredList, setFilterBrand}

}

export default useBrand