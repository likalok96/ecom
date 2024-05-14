import React, { useEffect } from 'react'
import useSearch from '../../hook/useSearch'
import ProductCard2 from '../ProductCard2/ProductCard2'

const SearchResult = ({showSearch,setShowSearch,search, search_record, filter_cate, searchList}) => {
//showSearch,
//    const { filter_cate, searchList} = useSearch(search, setSearch)
/*
    useEffect(()=>{
        showSearch && setShowSearch(true)
        !showSearch && setShowSearch(false)
    },[])
*/
  return (
    <>
    {showSearch &&
        <div className='search_result_wrapper'>
            
            <div style={{position:'relative'}}>
                
                {search ? 
                <div className='search_result'>
                    <button style={{position:'absolute',top:0,right:0}} onClick={()=>setShowSearch(false)}>close</button>

                    {searchList.length>0 ?
                    <div className='search_result_grid'>
                        <div className='search_result_prd'>
                        <h2>Products</h2>

                            <div className='search_result_prd_grid'>
                                {searchList.slice(0,4).map((prd)=><div key={prd.id} className='search_prd'><ProductCard2 prd={prd} discount={true}/></div>)}
                            </div>
                            <a href={`/collection?search=${search}`} className='search_result_prd_all'>View all</a>
                        </div>
                        
                        <div className='search_result_collection'>
                            <h2>Collections</h2>
                            <div className='search_result_collection_tag'>{filter_cate.map((cate)=><a key={cate} href={`/collection/${cate}`}>{cate.replace('_',' ')}</a>)}</div>
                        </div>
                        
                    </div>
                    
                    
                    : 
                    <div className='search_record'>
                    <p>Sorry, nothing found for "{search}".</p>
                    </div>}
                </div>
                : 

                <div>
                    {search_record && <div className='search_record'>
                    <button style={{position:'absolute',top:0,right:0}} onClick={()=>setShowSearch(false)}>close</button>

                        <h2>Recent Search</h2>
                        {search_record?.map((txt)=><a key={txt} href={`/collection?search=${txt}`}>{txt}</a>)}

                    </div>}
                </div>
                }
            </div>
        </div>}
        </>
  )
}

export default SearchResult