import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import categoryList from '../mysql_data/categoryLinks.json'
import brandList from '../mysql_data/brandlinks.json'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query'

const MainMune = ({show,setShow}) => {

    const {getProduct} = useContext(ShopContext)
    const productQuery = useQuery({queryKey: ['productList'],queryFn: getProduct});
    const productList = productQuery.data



    const [text, setText] = useState('')
    
    let categoryList_filtered =[];

    if (text==='First Group') {
        categoryList_filtered = Object.keys(categoryList).slice(0,6)
    } else if (text==='Second Group') {
        categoryList_filtered = Object.keys(categoryList).slice(7,13)
    } else if (text==='Third Group') {
        categoryList_filtered = Object.keys(categoryList).slice(14,20)
    }



    const Item_list = ({cate, text})=> {

        let filteredList = productList.filter((prd)=>prd.category.toLowerCase().indexOf(cate.toLowerCase())!==-1)

        let set = new Set()
      
      
        filteredList.map((prd)=>set.add(prd.brand))

      
//        console.log([...set])


        return(
            
            <ul className={show===cate ? 'open':''}>
            <li className='search_nav_menu_list' onClick={()=>setShow(text)}>
                <AiOutlineArrowLeft/>
                <p >
                    {cate} 
                </p>
                
            </li >
                {[...set].slice(0,9).map((brand)=><li className='search_nav_menu_list'><a  href={`/collection/${cate}/${brand}`} className='search_nav_menu_list'>{brand}</a></li>)}
                


                <li className='search_nav_menu_list'><a href={`/collection/${cate}`} className='search_nav_menu_list' >Shop All</a></li>
            </ul>
        )
    }

    const List_cate = ({url,text,onClick}) => {
        return(
        
            <li className='search_nav_menu_list' onClick={onClick}>
                <p href={url} >
                    {text} 
                </p>
                <AiOutlineArrowRight />
            </li>
        
        )
    }
//()=>{setShow(text) setText(text)}
    let search_text = ['First Group', 'Second Group', 'Third Group', 'Shop by Brand', 'On Sale', 'Our Principle']

  return (

    <div>
        
        <nav className={show==='' ? 'search_nav_menu open':'search_nav_menu'}>
            {show===''&&<ul>
                {search_text.map((txt)=><List_cate url='' text={txt} onClick={()=>{setShow(txt) 
                    setText(txt)}}/>)}
            </ul>}
        </nav>
        

        <nav className='search_nav_menu'>
        {search_text.slice(0,3).map(txt=>
            show===txt &&
            <ul className={show===txt ? 'open':''}>
            <li className='search_nav_menu_list' onClick={()=>setShow('')}>
                <AiOutlineArrowLeft/>
                <p > {txt}</p>
                
            </li>
                {categoryList_filtered.map((cate)=><List_cate url='' text={cate.replace('_',' ')} onClick={()=>setShow(cate)} />)}
            </ul>)
            }
        </nav>
        <nav className='search_nav_menu'>

        {categoryList_filtered.map(cate=> 
            show==cate &&
            <Item_list cate={cate} text={text}/>
        )
            }
        </nav>



    
    </div>

  )
}

export default MainMune