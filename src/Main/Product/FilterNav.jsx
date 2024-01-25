import React, {  useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const FilterNav = ({list,feild,handleClick,query, setCurrentPage}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    //let query = searchParams
    const [hide, setHide] = useState(!query?.get(feild) ? true : false)


    const handleClickReset = (e,feild) =>{
        
        handleClick(e,feild)
        setCurrentPage(0)
        
        //query.set('page',0)
        //setSearchParams(query)
        
        
    }

    
    

    console.log(query?.get(feild))
    const handleHide = () => {
        setHide(!hide)
    }

    return (
        <div className='product_page_filter'>
            <div className='product_page_filter_title' onClick={handleHide}>
                <p>{feild}</p> 
                <span>{hide ? '+' : '-'}</span>
            </div>
            <div className={hide ? 'hide':'product_page_filter_option'}>
                <div className='product_page_filter_value'>
                    
                    <input type='radio' onClick={(e)=>{handleClickReset(e,feild)}} checked={query?.get(feild)?.length===0||!query?.get(feild)} value='' id={feild} name={feild} readOnly={true}/>
                    <label htmlFor={feild}>all</label>
                
                </div>
                {list?.map((s)=>
                    <div className='product_page_filter_value' key={s}>
                    
                        <input type='radio' onClick={(e)=>{handleClickReset(e,feild)}} checked={query?.get(feild)?.includes(s)} value={s} id={s}  name={s} readOnly={true}/>
                        <label htmlFor={s}>{s.replace('_',' ')}</label>
                    
                    </div>
                )}
            </div>
        </div>
    )
}

export default FilterNav