import styles from './FilterListColumn.module.scss';


interface FilterListColumnProps {
    nameFilter: string,
    dataList: string[]
}

export default function FilterListColumn({ nameFilter, dataList }: FilterListColumnProps) {
    return (
        <div className={styles.filter}>
            <p>{nameFilter}</p>

            <div className={styles.list }>
                {dataList.map((elem, index) => <p key={index}>{elem}</p>)}
            </div>
        </div>
    );
}