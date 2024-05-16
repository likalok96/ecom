import React, { useContext } from 'react'
import './Dropdown.css'
import { ShopContext } from '../../Context/ShopContext'
import categoryList from '../../utils/data/categoryLinks.json'
import brandList from '../../utils/data/brandlinks.json'
import { useQuery } from '@tanstack/react-query'

const Dropdown = ({text,show,setShow}) => {

    const { getProduct} = useContext(ShopContext)
    const productQuery = useQuery({queryKey: ['productList'],queryFn: getProduct});

    const productList = productQuery.data
    let categoryList_filtered;

    if (text=='First Group') {
        categoryList_filtered = Object.keys(categoryList).slice(0,6)
    } else if (text=='Second Group') {
        categoryList_filtered = Object.keys(categoryList).slice(7,13)

    } else {
        categoryList_filtered = Object.keys(categoryList).slice(14,20)
    }


    const Item_list = ({cate})=> {

        let filteredList = productList?.filter((prd)=>prd.category.toLowerCase().indexOf(cate.toLowerCase())!==-1)

        let set = new Set()
      
        filteredList?.map((prd)=>set.add(prd.brand))


        return(
            
            <ul>
                <h1>{cate.replace('_',' ')}</h1>
                {[...set].slice(0,9).map((brand)=><li key={brand}><a href={`/collection/${cate}/${brand}`}>{brand}</a></li>)}
                


                <p ><a href={`/collection/${cate}`} className='shop_all'>Shop All</a></p>
            </ul>
        )
    }

  return (
    
        <div className={show===text ? 'dropdown active': 'dropdown'}>
            { text==='Shop by Brand' ?  
            
                <div className='level_1_brand' onMouseLeave={()=>setShow('false')}>
                    <div className='level_2_brand'>
                    { Object.keys(brandList).slice(0,20).map((brand)=><a href={`/collection/brand/${brand}`} key={brand}><img src={brandList[brand]} alt={"Brand Img"} className='dropdown_img' ></img></a>) }
                    </div>
                    <div className='shop_all_brand'>
                        <a href="/brand">Shop All Brand</a>
                    </div>
                    
                </div>
            
            : 

            <div className='level_1' onMouseLeave={()=>setShow('false')}>
                { categoryList_filtered.map((cate)=><ul key={cate}><Item_list cate={cate}/></ul>) }
            </div>
            }
        </div>

  )
}

export default Dropdown