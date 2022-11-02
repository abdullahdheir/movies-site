import React from 'react'
import ReactPaginate from 'react-paginate';
import { UrlWithPage } from '../config';

const PaginationComponent = ({ getPage, pageCount, setPageCount, setMovies }) => {
    const handlePageClick = (data) => {
        getPage(`${ UrlWithPage }${ data.selected + 1 }`, setPageCount, setMovies)
    }
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default PaginationComponent
