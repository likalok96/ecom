import React, { useEffect, useState } from 'react'
import TopNav from '../TopNav/TopNav'
import MainNav from '../MainNav/MainNav'
import SearchResult from '../../Component/SearchResult/SearchResult'
import useSearch from '../../hook/useSearch'

const StickyNav = ({setShow, show, showMenu, setShowMenu, setShowSearch, showSearch}) => {
/*
    const meadiaQuery = window.matchMedia("(max-width: 1000px)");
    const [showNav, setShowNav] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0);
    const [windowSize, setWindowSize] = useState(meadiaQuery.matches);

    const navCheck = ()=>{
        //window.scrollY > lastScrollY &&
        /*if (window.scrollY<200  ){
            setShowNav(true); 
            setLastScrollY(window.scrollY); 
        }

        if (window.scrollY  > lastScrollY && windowSize && window.scrollY>200 ) { 
          setShowNav(false); 
          //setLastScrollY(window.scrollY); 
  
        } 

        else { 
  
          setShowNav(true);  
        }
        setLastScrollY(window.scrollY); 
        
      }

      console.log(lastScrollY)
    useEffect(()=>{
        window.matchMedia("(max-width: 1000px)").addEventListener('change', (e)=>setWindowSize(e.matches));
        return ()=>{
            window.matchMedia("(max-width: 1000px)").removeEventListener('change', (e)=>setWindowSize(e.matches));
        }
    },[])

    useEffect(()=>{

      
      window.addEventListener('scroll', navCheck);
      

      return () =>{
        //window.matchMedia("(max-width: 1000px)").removeEventListener('change', (e)=>setWindowSize(e.matches));
        window.removeEventListener('scroll', navCheck);
      }

    },[lastScrollY])
*/

  return (
        <div className='sticky_nav'>
        <TopNav />
        <MainNav setShow={setShow} show={show} showMenu={showMenu} setShowMenu={setShowMenu} setShowSearch={setShowSearch} showSearch={showSearch} />
        {/*<div className='mainNav_wrapper'>
        
        <SearchNav setShow={setShow}/>
        
        </div>*/}
        
        </div>

        
  )
}

export default StickyNav