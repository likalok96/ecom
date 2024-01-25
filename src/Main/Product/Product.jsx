import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import prd1 from '../../assests/prd1.png'
import {FaStar} from 'react-icons/fa'
import './Product.css'
import { useParams,useSearchParams  } from 'react-router-dom'
import FilterNav from './FilterNav'
import ReactPaginate from 'react-paginate'
import ProductCard2 from '../../Component/ProductCard2'
import ProductSort from '../../Component/ProductSort'
import useProductFilter from '../../hook/useProductFilter'
import useProductSort from '../../hook/useProductSort'
import useProductPage from '../../hook/useProductPage'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Product = () => {

    console.log('loafing')
    //const [listing ,setListing] = useState([])

    //const {productList} = useContext(ShopContext)
    
    //console.log(productList)
/*

    productList.map((prd)=>{
        prd.search_text = prd.brand + prd.name
        prd.search = prd.category + prd.brand
        prd.price_cal = prd.price.replace('.00','')
    })
*/
    //let {category, brand,  filter_cate, filter_brand,  searchParams, handleClick} = useProductFilter()

/*
    const {category,brand} = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

//    console.log(searchParams.get('category') && searchParams.get('category').split(','))
//   console.log(searchParams.get('brand'))
    let productList2 =  productList.filter((prd)=>
        category ? prd.search.toLowerCase().indexOf(category.toLowerCase())!==-1 : true &&
        brand ? prd.search.toLowerCase().indexOf(brand.toLowerCase())!==-1 : true &&
        searchParams.get('search') ? prd.search_text.toLowerCase().indexOf(searchParams.get('search').toLowerCase())!==-1 : true
    )
/*

/*
    let productList2 = category ? productList.filter((prd)=>
                prd.search.toLowerCase().indexOf(category.toLowerCase())!==-1
    ) : productList

    productList2 = brand ? productList2.filter((prd)=>
                prd.search.toLowerCase().indexOf(brand.toLowerCase())!==-1
    ) : productList2

    productList2 = searchParams.get('search') ? productList2.filter((prd)=>
    prd.search_text.toLowerCase().indexOf(searchParams.get('search').toLowerCase())!==-1
) : productList2



    const [query, setQuery] = useState({
                                        category: category ? [ category] : [],
                                        brand: brand ? [ brand] : [],
                                        })
*/
//   const [sort, setSort] = useState('Manual')




    const {pageCount, itemOffset, itemsPerPage, currentItems, init, currentPage, handlePageChange, setItemOffset, setItemPerPage, setCurrentPage ,sort, setSort,filteredList,
        category, brand,  filter_cate, filter_brand,searchParams,  handleClick, handleClickReset,productQuery} = useProductPage()

    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(true)
        }, 1000);

    },[])
    
        //const [searchParams, setSearchParams] = useSearchParams();

    //const {sortProduct} = useProductSort()
    //filteredList = sortProduct(filteredList, sort)
    
   //console.log('fomr '+sort)

/*
    const [pageCount, setPageCount] = useState(1);
    const [itemOffset, setItemOffset] = useState(0);

    const [itemsPerPage ,setItemPerPage] = useState(10);
    const [currentItems, setCurrentItems] = useState(productList);

    const [init, setInit] = useState(true)


    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = 0 + itemsPerPage;
        setCurrentItems(productList)
        setPageCount(Math.ceil(productList.length / itemsPerPage));

        setInit(false)

  },[]);
*/
/*
    useEffect(()=>{
        setSearchParams({'category': query.category.join(',')})
        console.log('serch:' )
        console.log(searchParams.get('category').split(','))
        setSearchParams({'category': searchParams.get('category')})
    },[query])
*/
/*
    const filterProduct = (productList,searchParams,key) => {
        
        let filteredList = productList.filter((prd)=>{
    
        let isCate = searchParams.get(key) ? false : true

        searchParams.get(key) && searchParams.get(key).split(',').map((cate)=>{
            
            if(prd[key].toLowerCase().indexOf(cate.toLowerCase())!==-1){
                isCate= true
            } 

         })
        return isCate
    })

    return filteredList

    }
    */
/*
    let filteredList = filterProduct(productList,searchParams,'category')
    filteredList = filterProduct(filteredList,searchParams,'brand')
*/
 /*                                       
    let filteredList = productList2.filter((prd)=>{
//        prd.category.toLowerCase().indexOf(query.toLowerCase())!==-1
        let isCate = searchParams.get('category') ? false:true;
//        searchParams.get('category').split(',')
//query.category
searchParams.get('category') && searchParams.get('category').split(',').map((cate)=>{
            
            if(prd.category.toLowerCase().indexOf(cate.toLowerCase())!==-1){
                isCate= true
            } 

         })
        return isCate
    })

     filteredList = filteredList.filter((prd)=>{
        //        prd.category.toLowerCase().indexOf(query.toLowerCase())!==-1
        let isCate = searchParams.get('brand') ? false:true;
//                searchParams.get('brand').split(',')
//query.brand
searchParams.get('brand') &&searchParams.get('brand').split(',').map((brand)=>{
                    
                    if(prd.brand.toLowerCase().indexOf(brand.toLowerCase())!==-1){
                        isCate= true
                    } 
        
                 })
                return isCate
            })
*/



    
/*
    const unique_key = (key) => {
        let unique = [...new Set(productList2.map(item => item[key].split(',')))];
        let unique2 = [].concat.apply([], unique);
        let filter_cate = [...new Set(unique2.map(item => item))];
        return filter_cate
    }

//    let unique = [...new Set(productList.map(item => item.category.split(',')))];
//    let unique2 = [].concat.apply([], unique);
//    let filter_cate = [...new Set(unique2.map(item => item))];

    let filter_cate = unique_key('category')
    let filter_brand = unique_key('brand')
*/


/*
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(filteredList.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(filteredList.length / itemsPerPage));
        
      }, [itemOffset, itemsPerPage,searchParams,sort,init]);

    useEffect(() => {
        setCurrentPage(0);
        setItemOffset(0)
    },[itemsPerPage,searchParams,sort])
*/

      

//     let filteredList_show = filteredList.slice(itemOffset, itemOffset + itemsPerPage)
/*
    const handlePageClick = (e) => {
        const newOffset = e.selected * itemsPerPage;
        console.log(`User requested page number ${e.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };
*/
/*
    const handleClick = (e,feild) => {
        if (e.target.value===''){
//            setQuery({...query,[feild]:[]}) 
            searchParams.set(feild,[''])
            setSearchParams(searchParams)
            return
        }
        if(
//            query[feild].includes(e.target.value)||
            searchParams?.get(feild)?.split(',').includes(e.target.value)){
//            setQuery({...query,[feild]:query[feild].filter(item => item !== e.target.value)})
            searchParams.get(feild).indexOf(',') ===-1 ?
            searchParams.set(feild,['']) :
            searchParams.set(feild,searchParams.get(feild).split(',').filter(item => item !== e.target.value).join(','))
            
            setSearchParams(searchParams)
            

            console.log('searchParams.get(feild):'+searchParams.get(feild))

        } else {
//            setQuery({...query,[feild]:[...query[feild],e.target.value]})

            !searchParams.get(feild) ? 
            searchParams.set(feild,  e.target.value):
            searchParams.set(feild, searchParams.get(feild) + ',' + e.target.value)

            setSearchParams(searchParams)

        }
        setItemOffset(0)
//        setPageCount(0)
    }
    */
/*
    switch (sort) {
        case 'Price ascending':
            filteredList = filteredList.toSorted((a, b) => a.price_cal - b.price_cal)
            break;
        case 'Price descending':
            filteredList = filteredList.toSorted((a, b) => a.price_cal - b.price_cal).toReversed()
            break;
        case 'Title ascending':
            filteredList = filteredList.toSorted((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            break;
        case 'Title descending':
            filteredList = filteredList.toSorted((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).toReversed()
            break;
        case 'Manual':
            filteredList = filteredList.toSorted((a, b) => a.id - b.id)
            break;
        default:
            filteredList = filteredList


    }
*/

/*
    const handleSort = (e) => {
        setSort(e.target.value);
        setItemOffset(0)
    }

    const handleItemPerPage = (e) => {
        setItemPerPage(e.target.value);
        setItemOffset(0)
    }

    const SortNav = () => {
        return (
            <div className='product_page_top'>
                <div className='product_page_sort'>
                    <p>Item per page :</p>
                    <select name="" id="" value={itemsPerPage} onChange={(e)=>handleItemPerPage(e)}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={40}>40</option>
                    </select>

                    <p>Sort by :</p>
                    <select name="" id="" value={sort} onChange={(e)=>handleSort(e)}>
                        <option value="Manual">Manual</option>
                        <option value="Price ascending">Price ascending</option>
                        <option value="Price descending">Price descending</option>
                        <option value="Title ascending">Title ascending</option>
                        <option value="Title descending">Title descending</option>
                    </select>
                </div>
            </div>
        )
    }
*/

/*
    const FilterNav = ({list,feild}) => {

        const [hide, setHide] = useState(true)

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
                    <div>
                        
                        <input type='radio' onClick={(e)=>handleClick(e,feild)} checked={query[feild].length===1} value='' id='all' name={feild} />
                        <label for='all'>all</label>
                    
                    </div>
                    {list?.map((s)=>
                        <div>
                        
                            <input type='radio' onClick={(e)=>handleClick(e,feild)} checked={query[feild].includes(s)} value={s} id={s} name={s} />
                            <label for={s}>{s.replace('_',' ')}</label>
                        
                        </div>
                    )}
                </div>
            </div>
        )
    }
*/
/*
    const ProductCard = ({prd})=> {

        const StarRate = (rating)=> {
            const array = [1,2,3,4,5];
        
            return(
            <div>
              { array.map((num)=><FaStar key={num} color={(rating) >= num ? '#f58220' : 'a9a9a9'}/>)}
            </div>
            )
          }
        

        function onError(e) {
          e.target.onerror = null;
          e.target.src = prd1;
          
        }
    
    
        return (
          <div className='product_wrapper'>
            <a href={`/product/${prd.brand}/${prd.name}`}>
              <img src={prd.image} alt="Product Img"  onError={(e)=>onError(e)} />
              <div className='prd_info'>
                <p className='brand'>{prd.brand}</p>
                <p className='prd_name'>{prd.name}</p>
                <span className='prd_price'>{(prd.price_cal*1).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</span>
                <p className='prd_rating'>{StarRate(5)}</p>
              </div>
              </a>
          </div>
        )
    
      }
*/
/*
      const [currentPage, setCurrentPage] = useState(0);

      const handlePageChange = (e) => {
        const newOffset = e.selected * itemsPerPage;
            setCurrentPage(e.selected);
            setItemOffset(newOffset);
        };
*/
        //return <div>loading</div>

//init ? currentItems.map((prd)=><ProductCard2 prd={prd} discount={true} key={prd.id}/>) : 

  return ((filteredList?.length>0  )?
    <div className='product_page_wrapper'>
        <div>
            {!category && <FilterNav list={filter_cate} feild='category' handleClick={handleClick} query={searchParams} setCurrentPage={setCurrentPage}/>}
            {!brand && <FilterNav list={filter_brand} feild='brand' handleClick={handleClick} query={searchParams} setCurrentPage={setCurrentPage}/>}

        </div>
        <div className='product_list_outer_wrapper'>
            <ProductSort itemsPerPage={itemsPerPage} sort={sort} setSort={setSort} setItemPerPage={setItemPerPage} setCurrentPage={setCurrentPage} />
            {/*setItemOffset={setItemOffset} sort={sort} filteredList={filteredList}  setSort={setSort}*/}
            <div className='product_list_wrapper'>
                
                { filteredList.slice(itemOffset, itemOffset+itemsPerPage).map((prd)=><ProductCard2 prd={prd} discount={true} key={prd.id}/>)}
            </div>

            <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageChange}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={Math.ceil(filteredList.length / itemsPerPage) }
            //init ?  : Math.ceil(filteredList.length / itemsPerPage)
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
            //currentPage
            />

        </div>
  
    </div>

    :

    <div className='product_page_wrapper'>
        <div>
            <Skeleton  height={30} width={'15vw'} />
            

        </div>
        <div className='product_list_outer_wrapper'>
            <ProductSort itemsPerPage={itemsPerPage} sort={sort} setSort={setSort} setItemPerPage={setItemPerPage} setCurrentPage={setCurrentPage} />
            {/*setItemOffset={setItemOffset} sort={sort} filteredList={filteredList}  setSort={setSort}*/}
            <div className='product_list_wrapper'>
                
                { Array(10).fill(false).map((_)=>
                
                <ProductCard2 prd={_} discount={true}/> 
                )
                }
            </div>

        </div>

    </div>
  )

}

export default Product