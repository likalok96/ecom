import React from 'react'
import './ProductSort.css'


const ProductSort = ({itemsPerPage, sort, setSort, setItemPerPage, setCurrentPage}) => {

    const handleSort = (e) => {
        setSort(e.target.value)
        setCurrentPage(0)
    }

    const handleItemPerPage = (e) => {
        setItemPerPage(e.target.value);
        setCurrentPage(0)
    }

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

export default ProductSort