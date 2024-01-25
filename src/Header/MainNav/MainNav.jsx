import React, { useContext, useRef, useState } from 'react'
import './MainNav.css'
import Dropdown from '../Dropdown/Dropdown'
import logo from '../../assests/wnp_logo_2023.svg'
import {AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {ShopContext} from '../../Context/ShopContext'
import { useEffect } from 'react'
import prd1 from '../../assests/prd1.png'
import {AiOutlineSearch,AiOutlineMenu} from 'react-icons/ai'
import useSearch from '../../hook/useSearch'
import SearchBar from '../../Component/SearchBar'
import SearchNav from '../../Component/SearchNav'
import NavProfile from '../../Component/NavProfile'
import MainMune from '../../Component/MainMune'
import axios from 'axios'
import useRefresh from '../../RefreshToken/useRefresh'


const MainNav = ({show,setShow,showMenu, setShowMenu}) => {


    const {getQuantity,exp} = useContext(ShopContext);

//    const {getQuantity,auth,productList} = useContext(ShopContext);
/*
    productList.map((prd)=>{
        prd.search = prd.brand + prd.name
        prd.price_cal = prd.price.replace('.00','')
    })
*/
    const {showSearch, setShowSearch, search, setSearch, search_record, filter_cate, searchList, handleSearch} = useSearch()

    const quantity = getQuantity();



    

/*
    const [showSearch, setShowSearch] =  useState(false);

    const [search, setSearch] = useState('')


    let search_record = JSON.parse(localStorage.getItem('search_record'));

//    console.log(search_record)

//    console.log(search_record?.slice(10,3))

    const quantity = getQuantity();

    let searchList = search.length>0 ? productList.filter((prd)=>
    prd.search.toLowerCase().indexOf(search.toLowerCase())!==-1
    ) : []

    const unique_key = (key) => {
        let unique = [...new Set(productList.map(item => item[key].split(',')))];
        let unique2 = [].concat.apply([], unique);
        let filter_cate = [...new Set(unique2.map(item => item))];
        return filter_cate
    }

    let filter_cate = unique_key('category')

    filter_cate = filter_cate.filter((cate)=>
    cate.toLowerCase().indexOf(search.toLowerCase())!==-1
    )


    const handleSearch = ()=> {
        let index = search_record?.indexOf(search);

        localStorage.setItem("search_record", JSON.stringify(search_record ?
             index!==-1 ? [search,...search_record.slice(0,index),...search_record.slice(index+1,search_record.length)] 
             : [search, ...search_record]
             :[search]));
    }

    const List_cate = ({url,text}) => {
        return(
        
            <li>
                <a href={url} onclick={()=>setShow(text)}>
                    <p>{text}</p>
                </a>
            </li>
        
        )
    }
 */
/*
    const ProductCard = ({prd})=> {
        
        function onError(e) {
          e.target.onerror = null;
          e.target.src = prd1;
          
        }
    
        return (
          <div className='product_wrapper product_wrapper_search'>
            <a href={`/product/${prd.brand}/${prd.name}`}>
              <img src={prd.image} alt="Product Img"  onError={(e)=>onError(e)} />
              <div className='prd_info'>
                <p className='brand'>{prd.brand}</p>
                <p className='prd_name'>{prd.name}</p>
                <span className='prd_price'>{(prd.price_cal*1).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</span>
              </div>
              </a>
          </div>
        )
    
      }
*/

  return (
    <div className='mainNav_wrapper'>
        <div className='menu' ><AiOutlineMenu onClick={()=>{setShowMenu(!showMenu) 
            setShow('')}}/></div>
        <a href="/" className='home_img'>
            <img src={logo} alt="home" />
        </a>

        <div className='search_wrapper'>
            <SearchBar search={search} setSearch={setSearch} showSearch={showSearch} setShowSearch={setShowSearch} search_record={search_record}
             searchList={searchList} filter_cate={filter_cate} handleSearch = {handleSearch}/>
            {/*
            <div className='search_bar'>
                <input type="text" placeholder='Search...' onChange={(e)=>setSearch(e.target.value)} onFocus={()=>setShowSearch(true)} 
                onBlur={()=>{window.setTimeout(()=>setShowSearch(false),100)}}/>
                
                <a href={`/collection?search=${search}`}><AiOutlineSearch onClick={()=>handleSearch()}/></a>
                {showSearch &&
                <div className='search_result_wrapper'>
                     
                    <div>
                        {search ? 
                        <div className='search_result'>
                            
                            {searchList.length>0 ?
                            <div className='search_result_grid'>
                            
                                <div className='search_result_prd'>
                                <h2>Products</h2>

                                    <div className='search_result_prd_grid'>
                                        {searchList.slice(0,4).map((prd)=><div className='search_prd'><ProductCard prd={prd}/></div>)}
                                    </div>
                                    <a href={`/collection?search=${search}`} className='search_result_prd_all'>View all</a>
                                </div>
                                
                                <div className='search_result_collection'>
                                    <h2>Collections</h2>
                                    {filter_cate.map((cate)=><a href={`/collection/${cate}`}>{cate.replace('_',' ')}</a>)}
                                </div>
                                
                            </div>
                            
                             
                            : 
                            <p>Sorry, nothing found for "{search}".</p>}
                        </div>
                        : 

                        <div>
                            {search_record && <div className='search_record'>
                                
                                <h2>Recent Search</h2>
                                {search_record?.map((txt)=><a href={`/collection?search=${txt}`}>{txt}</a>)}

                            </div>}
                        </div>
                        }
                    </div>
                </div>}
            </div>
            */}
            <SearchNav setShow={setShow}/>
            
            {/* 
            <nav className='search_menu'>
                <ul>
                    <List_cate url='' text='First Group' />
                    <List_cate url='' text='Second Group'/>
                    <List_cate url='' text='Third Group'/>
                    <List_cate url='' text='Shop by Brand'/>
                    <List_cate url='' text='On Sale'/>
                    <List_cate url='' text='Our Principle'/>
                </ul>
            </nav>
            */}
        </div>
        <NavProfile quantity={quantity} exp={exp}/>
        {/* 
        <div className='nav_icon'>
            <div className='personal'>
                <a href="">
                    <AiOutlineHeart/>
                </a>
                <p className='cart_count'>1</p>
                <a  href="/account" className='middle_icon'><CgProfile/></a>
                <a href="/cart">
                    <AiOutlineShoppingCart/>
                </a>
                <p className='cart_count'>{quantity}</p>
            </div>

            <div className='order'>
                <a href="/account/order">Re-Order</a>

            </div>
        </div>
        */}

    </div>
  )
  
}

export default MainNav