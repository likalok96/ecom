import React, { useContext,useState,useEffect } from 'react'
import './MainNav.css'
import logo from '../../assests/wnp_logo.png'
import {ShopContext} from '../../Context/ShopContext'

import {AiOutlineMenu} from 'react-icons/ai'
import useSearch from '../../hook/useSearch'
import SearchBar from '../../Component/SearchBar/SearchBar'
import SearchNav from '../../Component/SearchNav/SearchNav'
import NavProfile from '../../Component/NavProfile/NavProfile'
import SearchResult from '../../Component/SearchResult/SearchResult'

const MainNav = ({setShow,showMenu, setShowMenu,showSearch, setShowSearch}) => {


    const {getQuantity,exp} = useContext(ShopContext);
//showSearch, setShowSearch,
    const { search, setSearch, search_record, filter_cate, searchList, handleSearch} = useSearch()
/*
    useEffect(()=>{
        if(!showNav) {
            //setSearch('');
            setShowSearch(false);
        }
    },[showNav])
*/
    const quantity = getQuantity();

  return (
    <div className='mainNav_wrapper'>
        <div className='menu' ><AiOutlineMenu onClick={()=>{setShowMenu(!showMenu) 
            setShow('')}}/>
        </div>
        
        <a href="/" className='home_img'>
            <img src={logo} alt="home" />
        </a>

        <div className='search_wrapper'>
        {<SearchBar search={search} setSearch={setSearch} showSearch={showSearch} setShowSearch={setShowSearch} search_record={search_record}
             searchList={searchList} filter_cate={filter_cate} handleSearch = {handleSearch} />}
                        <SearchResult setShowSearch={setShowSearch} showSearch={showSearch} search={search} search_record={search_record} setSearch={setSearch} filter_cate={filter_cate} searchList={searchList}/>

            {<SearchNav setShow={setShow} />}

        </div>

        <NavProfile quantity={quantity} exp={exp}/>
        

    </div>
  )
  
}

export default MainNav