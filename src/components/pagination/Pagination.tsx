import ButtonPage from './components/buttonPage/ButtonPage';
import ButtonTogglePage from './components/buttonTogglePage/ButtonTogglePage';
import styles from './Pagination.module.scss';


interface PaginationProps {
    currentPage: number,
    toggleCurrentPage: (page: number) => void,
    nextPage: () => void,
    prevPage: () => void,
    pageCount: number,
}


export default function Pagination({pageCount, currentPage, toggleCurrentPage, nextPage, prevPage }:PaginationProps) {

    const pagesArray = Array.from({ length: pageCount }, (_, i) => i + 1)

    return (
        <div className={styles.container}>
            <ButtonTogglePage
                direction='toLeft'
                prevPage={prevPage}
                disabled={currentPage === 1 }
            />
            <div className={styles.pages }>
                {pagesArray.map(page => {

                return (
                    <ButtonPage
                        key={page }
                        page={page}
                        currentStatus={currentPage === page}
                        toggleCurrentPage={toggleCurrentPage }
                    />
                )
            })}
            </div>
            <ButtonTogglePage
                direction='toRight'
                nextPage={nextPage}
                disabled={currentPage === pageCount }
            />
            
        </div>


    );
}