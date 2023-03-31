import { useState } from "react";


interface usePaginationProps {
    arr: any[],
    perPage: number
}


export default function usePagination({arr, perPage }: usePaginationProps) {
    const [currentPage, setCurrentPage] = useState(1)


    const itemCount = arr.length;
    const pageCount = Math.ceil(itemCount / perPage);
    
    const from = (currentPage - 1) * perPage;
    const to = currentPage * perPage;

    const toggleCurrentPage = (page: number) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }

    const nextPage = () => {
        setCurrentPage(currentPage => currentPage + 1);
        window.scrollTo(0,0);
    }

    const prevPage = () => {
        setCurrentPage(currentPage => currentPage - 1);
        window.scrollTo(0, 0);
    }

    return {
        pageCount,
        from,
        to,
        toggleCurrentPage,
        nextPage,
        prevPage,
        currentPage
    };
}