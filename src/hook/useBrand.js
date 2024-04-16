import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useQuery } from '@tanstack/react-query';
const useBrand = ({category}) => {

  const {getProduct} = useContext(ShopContext);

  const productQuery = useQuery({queryKey: ['productList'],queryFn: getProduct});

    const [brandList , setBrandList] = useState();
    const [filterBrand, setFilterBrand] = useState('');

    let filteredList = productQuery?.data?.filter((prd)=>prd.category.toLowerCase().indexOf(category.toLowerCase())!==-1)

    filteredList = filteredList?.filter((prd)=>prd.brand.toLowerCase().indexOf(filterBrand.toLowerCase())!==-1)
  
  
  
    useEffect(() =>{
      let set = new Set()
      

      filteredList && filteredList.map((prd)=>set.add(prd.brand))
      
      setBrandList([...set])
  
    },[productQuery.data])

    return {brandList, filterBrand, filteredList, setFilterBrand}

}

export default useBrand