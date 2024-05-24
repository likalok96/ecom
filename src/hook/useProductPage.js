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

    const setSearchParamsState = (params,setState)=> {
        return (value)=>{
            searchParams.set(params,value)
            setSearchParams(searchParams)
            setState(value)
        }
    }

    const setSort = setSearchParamsState('sort',setSortState)

    if(filteredList) filteredList = sortProduct(filteredList,sort)

    const [itemsPerPage ,setItemPerPageState] = useState(Number(searchParams.get('limit')) || 10);

    const setItemPerPage = setSearchParamsState('limit',setItemPerPageState)

    const [currentPage, setCurrentPageState] = useState(Number(searchParams.get('page')) ?? 0);

    const setCurrentPage = setSearchParamsState('page',setCurrentPageState)

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