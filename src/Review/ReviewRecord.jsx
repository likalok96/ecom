import React, { useContext, useState } from 'react'
import ReviewCard from './ReviewCard'
import { ShopContext } from '../Context/ShopContext'
import ReactPaginate from 'react-paginate'

const ReviewRecord = ({reviewRecord}) => {

//    const {reviewRecord} = useContext(ShopContext)

    const [currentPage, setCurrentPage] = useState(0)

    const itemsPerPage = 2
    const pageCount = Math.ceil(reviewRecord?.length / itemsPerPage || 1)
    console.log(pageCount)

    const handlePageChange = (e) => {
        setCurrentPage(e.selected);
//       window.scrollTo(0, 0)
    };

  return (
    <div>
        {reviewRecord && <ul>{reviewRecord.slice(currentPage*itemsPerPage,(currentPage+1)*itemsPerPage).map((record,idx)=><li key={idx}><ReviewCard reviewRecord={record}/></li>)}</ul>}
        <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={Math.ceil(pageCount)}
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
  )
}

export default ReviewRecord