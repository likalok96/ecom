import React, { useContext } from 'react'
import StarRate_static from '../Component/StarRate_static'
import { ShopContext } from '../Context/ShopContext'
import { useQuery } from '@tanstack/react-query'

const ReviewCard = ({reviewRecord}) => {

    const { getProduct} = useContext(ShopContext)
    const productQuery = useQuery({queryKey: ['productList'],queryFn: getProduct});
    const productList = productQuery.data
    const prd = productList.filter((prd)=>prd.id==reviewRecord.product_id)[0]



    return (
    <div className='review_card'>

        <div className='review_card_icon'>
            <h1>{reviewRecord.name[0]}</h1>
        </div>

        <div className='review_card_body'>
            <div className='review_card_top'>
                <div className='review_card_name'>
                    <h2>{reviewRecord.name}</h2>
                    {/*<p>Verified Buyer</p>*/}
                </div>
                
                <p>{reviewRecord.date.slice(0,10)}</p>
            </div>
        
            <StarRate_static rating={reviewRecord.score}/>
            <h2>{reviewRecord.title}</h2>
            <h3>{reviewRecord.content}</h3>
            {reviewRecord.product_id!==0 ?
            <a href={`/product/${prd.brand}/${prd.name}`}>On {prd.brand} {prd.name}</a>
            :
            <a href="/">On E-Shop</a>
            }
        </div>

    </div>
    )
}
export default ReviewCard