import React from 'react'
import './SearchNav.css'

const SearchNav = ({setShow}) => {
    const List_cate = ({url,text}) => {
        return(
        
            <li>
                <a href={url} onMouseEnter={()=>setShow(text)}>
                    <p>{text}</p>
                </a>
            </li>
        
        )
    }

  return (
    <nav className='search_nav'>
        <ul>
            <List_cate url='' text='First Group' />
            <List_cate url='' text='Second Group'/>
            <List_cate url='' text='Third Group'/>
            <List_cate url='/brand' text='Shop by Brand'/>
            {/*<List_cate url='' text='On Sale'/>
            <List_cate url='' text='Our Principle'/>*/}
        </ul>
    </nav>
  )
}

export default SearchNav