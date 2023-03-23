import { inputChangeSync } from '../synсInput';
import styles from './FilterListColumn.module.scss';


interface FilterListColumnProps {
    nameFilter: string,
    dataList: string[]
}


export default function FilterListColumn({ nameFilter, dataList }: FilterListColumnProps) {
    return (
        <div className={styles.filter}>
            <p>{nameFilter}</p>

            <div className={styles.list}>
                {dataList.map((elem, index) =>
                    <div className={styles.item }>
                        <input onChange={(e) => inputChangeSync(e,index, 'type') } type="radio" id={'types' + index} name='q2' />
                        <label className={styles.label} htmlFor={'types' + index}>
                            {elem}
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
}