import React, { useContext, useState } from 'react'
import ProductCard2 from '../../Component/ProductCard2/ProductCard2'
import { ShopContext } from '../../Context/ShopContext'
import './Wishlist.css'

const Wishlist = () => {
    const {wishItems} = useContext(ShopContext)

    if(Object.keys(wishItems).length===0 || !wishItems) 
    return (
        <div className='wishlist_wrapper'>
            <h1>No items</h1>
        </div>
    )

  return (
    <div className='wishlist_wrapper'>
        <h1>Wishlist Items</h1>
        <div className='wishlist_grid'>
            {Object.keys(wishItems).map((id) => 
                <div className='wishlist_card'>
                    <ProductCard2 key={id} prd={wishItems[id]} discount={true}/>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default Wishlist