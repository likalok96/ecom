import {useState} from 'react'
import useProductFilter from './useProductFilter'
import useProductSort from './useProductSort'


const useProductPage = () => {


    let {category, brand, productList, filter_cate, filter_brand, filteredList, handleClick, searchParams, setSearchParams,productQuery} = useProductFilter()

    const handleClickReset = (e,feild) =>{
        setCurrentPage(0)
        handleClick(e,feild)
        
    }

    const {sortProduct} = useProductSort()

    const [sort, setSortState] = useState(searchParams.get('sort') || 'Manual')

    const setSort = (value)=>{
        searchParams.set('sort',value)
        setSearchParams(searchParams)
        setSortState(value)
        
    }
    if(filteredList) filteredList = sortProduct(filteredList,sort)

    const [itemsPerPage ,setItemPerPageState] = useState(Number(searchParams.get('limit')) || 10);

    const setItemPerPage = (value)=>{
        searchParams.set('limit',value)
        setSearchParams(searchParams)
        setItemPerPageState(value)
    }

    const [currentPage, setCurrentPageState] = useState(Number(searchParams.get('page')) ?? 0);

    const setCurrentPage = (value)=>{
        searchParams.set('page',value)
        setSearchParams(searchParams)
        setCurrentPageState(value)
    }

    const pageCount = Math.ceil(filteredList?.length / itemsPerPage) ?? 1

    const itemOffset = currentPage * itemsPerPage || 0

    const currentItems = filteredList

    const handlePageChange = (e) => {
        setCurrentPage(e.selected);

        window.scrollTo(0, 0)
    };

    return {pageCount, itemOffset, itemsPerPage, currentItems,  currentPage, handlePageChange,  setItemPerPage, setCurrentPage,sort ,setSort,filteredList,
        category, brand, productList, filter_cate, filter_brand, handleClick,handleClickReset,searchParams,productQuery}

}

export default useProductPage