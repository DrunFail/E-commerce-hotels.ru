import styles from './ButtonPage.module.scss';


interface ButtonPageProps {
    currentStatus: boolean,
    page: number,
    toggleCurrentPage: (page:number) => void
}


export default function ButtonPage({ page, currentStatus,toggleCurrentPage }:ButtonPageProps) {
    return (
        <button
            type='button'
            className={styles[currentStatus.toString()]}
            onClick={() => toggleCurrentPage(page) }
        >
            {page }
        </button>
    );
}