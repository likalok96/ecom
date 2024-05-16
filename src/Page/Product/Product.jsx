import React from 'react'

import './Product.css'
import FilterNav from '../../Component/FilterNav/FilterNav'
import ReactPaginate from 'react-paginate'
import ProductCard2 from '../../Component/ProductCard2/ProductCard2'
import ProductSort from '../../Component/ProductSort/ProductSort'

import useProductPage from '../../hook/useProductPage'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Product = () => {

    const { itemOffset, itemsPerPage, currentPage, handlePageChange, setItemPerPage, setCurrentPage ,sort, setSort,filteredList,
        category, brand,  filter_cate, filter_brand,searchParams,  handleClick} = useProductPage()


  return ((filteredList?.length>0  )?
    <div className='product_page_wrapper'>
        <div>
            {!category && <FilterNav list={filter_cate} feild='category' handleClick={handleClick} query={searchParams} setCurrentPage={setCurrentPage}/>}
            {!brand && <FilterNav list={filter_brand} feild='brand' handleClick={handleClick} query={searchParams} setCurrentPage={setCurrentPage}/>}

        </div>
        <div className='product_list_outer_wrapper'>
            <ProductSort itemsPerPage={itemsPerPage} sort={sort} setSort={setSort} setItemPerPage={setItemPerPage} setCurrentPage={setCurrentPage} />
            <div className='product_list_wrapper'>
                
                { filteredList.slice(itemOffset, itemOffset+itemsPerPage).map((prd)=><ProductCard2 prd={prd} discount={true} key={prd.id}/>)}
            </div>

            <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageChange}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={Math.ceil(filteredList.length / itemsPerPage) }
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