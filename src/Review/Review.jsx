import React, { useContext, useEffect, useState } from 'react'
import './Review.css'
import {FaStar} from 'react-icons/fa'
import axios from 'axios'
import ReviewCard from './ReviewCard'
import StarRate_static from '../Component/StarRate_static'
import ReactPaginate from 'react-paginate'
import ReviewRecord from './ReviewRecord'
import LoadingSpinner from '../Component/LoadingSpinner'
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ShopContext } from '../Context/ShopContext'



const Review = ({product_id,product}) => {

    const {getReview} = useContext(ShopContext);

    const [showForm, setShowForm] = useState(false)
    const [showBtn, setShowBtn] = useState(true)
    //const [reviewData, setReviewData] = useState()
    const [reviewRecord, setReviewRecord] = useState()

    const reviewQuery = useQuery({queryKey: ['review'],queryFn: getReview});
    const reviewData = reviewQuery.data
    //const reviewRecord = reviewQuery.data.filter((record)=>record.product_id===product_id)

    useEffect(()=>{
        if(reviewData){
        setReviewRecord(reviewQuery.data.filter((record)=>record.product_id===product_id))
        }
    },[reviewData])


    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(true)
        }, 1000);
  
    },[])


    const [currentPage, setCurrentPage] = useState(1)

    let total = 0;
    reviewRecord&&reviewRecord.map((record)=>{total+=record.score})
    let average = total/reviewRecord?.length
    /*
    useEffect(()=>{

        axios.get(process.env.REACT_APP_API_URL + '/review')
        .then((res)=>{
            console.log(res.data)
            setReviewData(res.data)
            setReviewRecord(res.data.filter((record)=>record.product_id===product_id))
        }).catch((err)=>{
            console.log(err)
        })
        

    },[])
*/


    const StarRate = ({review,setReview})=> {

        const [showRate, setShowRate] = useState(0)

        const array = [1,2,3,4,5];

        return(
        <div className='' onMouseLeave={()=>setShowRate(0)}>
            {array.map((num)=><FaStar key={num} color={(showRate===0 ? review.score : showRate) >= num ? '#f58220' : 'a9a9a9'} onMouseEnter={()=>setShowRate(num)}  onClick={()=>setReview({...review,score:num})}/>)}
        </div>
        )
    }


    const ReviewForm = ({product_id}) =>{

        const [review, setReview] = useState({name:'',
                                              email:'',
                                              score: 0,
                                              title: '',
                                              content: '',
                                              product_id: product_id
                                            })

        const PostReview = async ()=>{ 
            return  await axios.post(process.env.REACT_APP_API_URL + '/review',review)
            .then((res)=>{
                console.log('success')
                alert('Post success.')
            }).catch((err)=>{
                console.log(err)
            })
        }

        const queryClient = useQueryClient()

        const mutation = useMutation({
            mutationFn:PostReview,
            onSuccess: () => queryClient.invalidateQueries({queryKey:['review']})
        })
                                       

        const reviewClick = (e) => {
            e.preventDefault();
            /*
            axios.post(process.env.REACT_APP_API_URL + '/review',review)
            .then((res)=>{
                console.log('success')
                alert('Post success.')
            }).catch((err)=>{
                console.log(err)
            })
            */
             mutation.mutate()
        }

        return (
        <form action="" className='review_form'>

            <h2>Write a Review</h2>

            <p>Score:</p>
            
            <StarRate review={review} setReview={setReview}/>
            <p>Title:</p>
            <input type="text" required onChange={(e)=>setReview({...review,title:e.target.value})}/>
            <p>Review:</p>
            <textarea name="" id="" cols="30" rows="4" required onChange={(e)=>setReview({...review,content:e.target.value})}></textarea>

            <div className='review_form_bottom'>
                <div className='review_form_bottom_option'>
                    <div>
                        <p>Name:</p>
                        <input type="text" required onChange={(e)=>setReview({...review,name:e.target.value})}/>
                    </div>
                    <div>
                        <p>Email:</p>
                        <input type="email" required onChange={(e)=>setReview({...review,email:e.target.value})}/>
                    </div>
                </div>

                <div className='review_btn'>
                    <button className='review_btn' onClick={(e)=>{reviewClick(e)}}>Post</button>
                </div>
            </div>

        </form>
        )
        
    }


    if(reviewQuery.isFetching && !loading) return (
        <LoadingSpinner />
    )

  return (
    <div className='review_outer_wrapper'>

        <div className='review_wrapper'>

            <div className='review_total'>
                <StarRate_static rating={average}/>
                <p>{reviewRecord?.length} Reviews</p>
            </div>
            {(showBtn) &&
            <div className='review_btn'>
                <button onClick={()=>setShowForm(true)}>Write a Review</button>
            </div>
            }
            
            { !product &&
            <div className='review_option'>
                <p onClick={()=>{setReviewRecord(reviewData.filter((record)=>record.product_id===0)); setShowBtn(true)}} className={showBtn && 'btn_active'}>Site Reviews</p>
                <p onClick={()=>{setReviewRecord(reviewData.filter((record)=>record.product_id!==0)); setShowForm(false); setShowBtn(false)}} className={!showBtn && 'btn_active'}>Product Reviews</p>
            </div>
            }
            {showForm && <ReviewForm product_id={product_id ? product_id : 0}/>}

            <ReviewRecord reviewRecord={reviewRecord}/>
            
            
            


        </div>

        

    </div>
  )
}
/*
            {reviewRecord && reviewRecord.slice(currentPage*itemsPerPage,(currentPage+1)*itemsPerPage).map((record)=><ReviewCard reviewRecord={record}/>)}

            <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageChange}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={Math.ceil(pageCount)}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="current"
            renderOnZeroPageCount={null}
            forcePage={currentPage}
            />
*/
export default Review