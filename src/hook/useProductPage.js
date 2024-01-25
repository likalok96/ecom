import React,{useState, useEffect, useContext, useRef} from 'react'
import { ShopContext } from '../Context/ShopContext'
import useProductFilter from './useProductFilter'
import useProductSort from './useProductSort'
import { useSearchParams } from 'react-router-dom'


const useProductPage = () => {

    //let {filteredList} = useProductFilter()
    //const filteredList = [1,2,3]
    let {category, brand, productList, filter_cate, filter_brand, filteredList, handleClick, searchParams, setSearchParams,productQuery} = useProductFilter()

    const handleClickReset = (e,feild) =>{
        setCurrentPage(0)
        handleClick(e,feild)
        
    }

    const {sortProduct} = useProductSort()

    //const [searchParams , setSearchParams] = useSearchParams()
    //const sort = searchParams.get('sort') || "Manual"

    

    
    const [sort, setSortState] = useState(searchParams.get('sort') || 'Manual')
    //const sort = searchParams.get('sort') ?? 'Manual'

    const setSort = (value)=>{
        searchParams.set('sort',value)
        setSearchParams(searchParams)
        setSortState(value)
        
    }
    if(filteredList) filteredList = sortProduct(filteredList,sort)

    //const {productList} = useContext(ShopContext)
    const [itemsPerPage ,setItemPerPageState] = useState(Number(searchParams.get('limit')) || 10);
    //const itemsPerPage = searchParams.get('limit') ?? 10

    const setItemPerPage = (value)=>{
        searchParams.set('limit',value)
        setSearchParams(searchParams)
        setItemPerPageState(value)
    }

    const [currentPage, setCurrentPageState] = useState(Number(searchParams.get('page')) ?? 0);
    //const currentPage = searchParams.get('page') || 0

    const setCurrentPage = (value)=>{
        searchParams.set('page',value)
        setSearchParams(searchParams)
        setCurrentPageState(value)
    }




    //const [pageCount, setPageCount] = useState(1);
    const pageCount = Math.ceil(filteredList?.length / itemsPerPage) ?? 1
    //1 Math.ceil(productList.length / itemsPerPage) ??
    //const [itemOffset, setItemOffset] = useState(currentPage * itemsPerPage || 1);
    const itemOffset = currentPage * itemsPerPage || 0
    //console.log(itemOffset)
    //const [itemsPerPage ,setItemPerPage] = useState(searchParams.get('limit') ?? 10);


    //const [currentItems, setCurrentItems] = useState(filteredList);
    const currentItems = filteredList
    //productList
    //const [init, setInit] = useState(true)
    //const init = useRef(true)
    //console.log(init)
    //console.log(sort)
    //console.log(init.current===false)


    
    //const [searchParams, setSearchParams] = useSearchParams();
/*
    useEffect(() => {
        if(init.current===false){
            //setCurrentPage(0);
            //setItemOffset(0);
            console.log('reset');
        }
        
        //searchParams.set('page',0)
        //setSearchParams(searchParams)
        
        
    },[itemsPerPage,searchParams?.get('brand'),searchParams?.get('category'), searchParams?.get('sort')])

    useEffect(() => {
        //const endOffset = 0 + itemsPerPage;
        //setCurrentItems(filteredList)
        //productList
        //setPageCount(Math.ceil(filteredList.length / itemsPerPage));
        //productList
        //setInit(false)
        init.current = false
        console.log('wtf')

    },[]);
    */
/*
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(filteredList.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(filteredList.length / itemsPerPage));
        
    }, [ sort,init]);
    */
//itemOffset, itemsPerPage,sort,init, searchParams
/*
    useEffect(() => {
        if(init.current===false){
            setCurrentPage(0);
            //setItemOffset(0);
            console.log('reset');
        }
        
        //searchParams.set('page',0)
        //setSearchParams(searchParams)
        
        
    },[itemsPerPage,searchParams?.get('brand'),searchParams?.get('category'), sort])
    */
    //,searchParams sort
    
    //console.log(sort)

//console.log(currentPage)
    const handlePageChange = (e) => {
        const newOffset = e.selected * itemsPerPage;
        setCurrentPage(e.selected);
        //searchParams.set('page',e.selected)
        //setSearchParams(searchParams)
        //setItemOffset(newOffset);
        window.scrollTo(0, 0)
    };

    return {pageCount, itemOffset, itemsPerPage, currentItems,  currentPage, handlePageChange,  setItemPerPage, setCurrentPage,sort ,setSort,filteredList,
        category, brand, productList, filter_cate, filter_brand, handleClick,handleClickReset,searchParams,productQuery}
    //setItemOffset,init,

}

export default useProductPage