import { useState } from "react";
import SearchInput from "../../../UI/inputs/searchInput/SearchInput";
import styles from './FilterCheckbox.module.scss';

interface FilterCheckboxProps {
    filterName: string,
    dataList: string[]
}

const limit = 4;


export default function FilterCheckbox({ filterName, dataList }: FilterCheckboxProps) {
    const [showAllList, setShowAllList] = useState(limit);


    return (
        <div className={styles.filter }>
            <p>{filterName}</p>
            <SearchInput />
            <div>
                {dataList.map((elem, index) => {
                    if (index < showAllList) {
                        return (
                            <div key={index}>
                                <input type='checkbox' name='manufact' id={elem} />
                                <label htmlFor={elem}>{elem}</label>
                            </div>);
                    }
})}
                
            </div>
            {dataList.length > showAllList && <button onClick={() => setShowAllList(dataList.length)}>Показать все<div className={styles.triangle }></div></button>}
            {limit < showAllList && <button onClick={() => setShowAllList(limit)}>Свернуть<div className={styles.reverseTriangle }></div></button> }
        </div>
    );
}