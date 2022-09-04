import React from 'react';
import { Pagination as BoostrapPagination } from 'react-bootstrap';
import { useContacts } from '../provider';


function Pagination() {
    const { totalOfPages, page, fetchContacts } = useContacts()

    function handleClickPage(currentPage) {
        fetchContacts({ _page: currentPage })
    }

    function nextPage() {
        if (page !== totalOfPages) fetchContacts({ _page: page + 1})
    }

    function previousPage() {
        if (page > 1) fetchContacts({ _page: page - 1})
    }

    return (
        <BoostrapPagination>
            <BoostrapPagination.Prev onClick={() => previousPage()} />
            {Array.apply('', { length: totalOfPages })
                .map((_, index) => {
                    const currentPage = index + 1
                    return <BoostrapPagination.Item onClick={() => handleClickPage(currentPage)} key={currentPage} active={page === currentPage}>{currentPage}</BoostrapPagination.Item>
                })}
            <BoostrapPagination.Next onClick={() => nextPage()} />
        </BoostrapPagination>
    );
}

export default Pagination;