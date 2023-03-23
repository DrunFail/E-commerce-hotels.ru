import SearchInput from "../../../UI/inputs/searchInput/SearchInput";
import styles from './FilterCheckbox.module.scss';

interface FilterCheckboxProps {
    filterName: string,
    dataList: string[]
}


export default function FilterCheckbox({ filterName, dataList }: FilterCheckboxProps) {
    return (
        <div className={styles.filter }>
            <p>{filterName}</p>
            <SearchInput />
            <div>
                {dataList.map((elem, index) =>
                    <div key={index}>
                        <input type='checkbox' name='manufact' id={elem} />
                        <label htmlFor={elem}>{elem}</label>
                    </div>
                )}
            </div>
        </div>
    );
}