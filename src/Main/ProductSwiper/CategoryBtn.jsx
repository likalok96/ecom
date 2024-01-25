import React, { useState } from 'react'

const CategoryBtn = ({brand,setFilterBrand,filterBrand}) => {

    const [activeIndex , setActiveIndex] = useState()


    const handleClick = (brand) =>{
        setActiveIndex(brand)
        setFilterBrand(brand)

    }

  return (

               <p  onClick={()=>handleClick(brand)} className={filterBrand==={brand} && 'category_active'} >{brand}</p>


  )
}

export default CategoryBtn