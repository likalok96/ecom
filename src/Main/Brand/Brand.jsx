import React, { useEffect, useState } from 'react'
import './Brand.css'
import useProductFilter from '../../hook/useProductFilter'
import LoadingSpinner from '../../Component/LoadingSpinner'

const Brand = () => {

    let {filter_brand} = useProductFilter()

    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(true)
        }, 1000);
  
    },[])

    const unique_key = (filter_brand) => {
        let unique = [...new Set(filter_brand.map(item => item.slice(0,1)))];
        let unique2 = [].concat.apply([], unique);
        let filter_cate = [...new Set(unique2.map(item => item))];
        return filter_cate
    }

    let first_letter = unique_key(filter_brand)

    const Brand_text = ({text}) => {

        let brand = filter_brand.filter((brand)=> brand.toLowerCase().indexOf(text.toLowerCase())===0)

        return(
            <div className='shop_brand'>
                <h1>{text}</h1>
                <div className='shop_brand_inner_wrapper'>
                    {brand.map((brand)=><a href={`/collection/brand/${brand}`}>{brand}</a>)}
                </div>
            </div>
        )
    }

    if(!filter_brand || !loading) return (
        <LoadingSpinner />
    )
    
  return (
    <div className='shop_brand_wrapper'>
        {first_letter.map((letter)=><Brand_text text={letter}/>)}
    </div>
  )
}

export default Brand