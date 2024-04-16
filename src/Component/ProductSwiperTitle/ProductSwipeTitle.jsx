import React from 'react'
import './ProductSwiperTitle.css'
const ProductSwipeTitle = ({opt, title, category, filterBrand, brandList, setFilterBrand}) => {

  return (<div>
        {opt ? <h2>{title}</h2>:
        <div className='no_opt'> 
        <h2>{title}</h2>  
        <p><a href={`/collection/${category}`}>View All</a></p>
        </div>
        }


    {opt ? 

    
    <div className='ps_btn_wrapper'>
        <div className='ps_btn_option'>
            <p onClick={()=>setFilterBrand('')} className={filterBrand==='' && 'category_active'}>All</p>
            { brandList && brandList.slice(0,5).map((brand,i)=>{

            return filterBrand===brandList[i] ? <p key={i} onClick={()=>setFilterBrand(brand)} className='category_active' >{brand}</p> : 
            <p key={i} onClick={()=>setFilterBrand(brand)} >{brand}</p>
            }) }

        </div>

        <a href={`/collection/${category}`}>View All</a>
    </div>

    
    :        <div></div>}
    </div>
  )
}

export default ProductSwipeTitle