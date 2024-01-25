import React from 'react'
import { useState } from 'react'
import useProductFilter from './useProductFilter'
import { useSearchParams } from 'react-router-dom'
import useProductPage from './useProductPage'

const useProductSort = () => {
    
    //let {searchParams, setSearchParams} = useProductFilter()
    /*
    const [searchParams , setSearchParams] = useSearchParams()
    const [sort, setSortState] = useState(searchParams.get('sort') || 'Manual')
    //const sort = searchParams.get('sort') ?? 'Manual'

    const setSort = (value)=>{
        searchParams.set('sort',value)
        setSearchParams(searchParams)
        setSortState(value)
        
    }
*/
    const sortProduct = (filteredList,sort) =>{

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
        return filteredList

    }

    return {sortProduct}
    //, sort, setSort
}

export default useProductSort