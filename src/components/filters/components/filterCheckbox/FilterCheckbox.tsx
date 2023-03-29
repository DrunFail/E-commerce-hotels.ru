import {useRef, useState } from "react";
import { useResize } from "../../../../hooks/useResize";
import { useAppDispatch } from "../../../../redux/hooks";
import InputCheckboxCount from "../../../../UI/inputs/inputCheckboxCount/InputCheckboxCount";
import SearchInput from "../../../../UI/inputs/searchInput/SearchInput";
import { changeCheckedStatus } from "../../redux/filterSlice";
import { CheckboxFilter } from "../../redux/interfaces";
import ButtonHide from "../../UI/buttonHide/ButtonHide";
import ButtonShowAll from "../../UI/buttonShowAll/ButtonShowAll";
import styles from './FilterCheckbox.module.scss';

interface FilterCheckboxProps {
    filterName: string,
    dataList: CheckboxFilter[]
   
}

const DESKTOP_LIMIT_MENU_ITEMS= 4;
const MOBILE_LIMIT_MENU_ITEMS = 2;


export default function FilterCheckbox({ filterName, dataList}: FilterCheckboxProps) {
    const size = useResize();
    const limit = size < 800
        ? MOBILE_LIMIT_MENU_ITEMS
        : DESKTOP_LIMIT_MENU_ITEMS;

    const [showLimitMenu, setShowLimitMenu] = useState<number>(limit);
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    const handleSubmitSearch= () => {
        if (searchRef.current) {
            setSearchValue(searchRef.current.value)
        }
    }

    const filterDataList = (elem: {name:string, count: number, checked:boolean}) => {
        return elem.name.toLowerCase().includes(searchValue.toLowerCase())
    }

    const handleClickShowAll = () => {
        setShowLimitMenu(dataList.length)
    }

    const handleClickHide = () => {
        setShowLimitMenu(limit)
    }

    return (
        <fieldset onSubmit={(e) => e.preventDefault() } className={styles.filter }>
            <legend>{filterName}</legend>

            <SearchInput
                onClick={handleSubmitSearch}
                searchRef={searchRef} />

            <div className={styles.inputList}>
                {dataList.filter(filterDataList).map((elem, index) => {
                    if (index < showLimitMenu) {
                        return (
                            <div key={elem.name} className={styles.inputItem}>
                                <InputCheckboxCount
                                    checked={elem.checked}
                                    handleClick={() => dispatch(changeCheckedStatus({ filterName: filterName, name: elem.name }))}
                                    name={elem.name}
                                    id={elem.name}
                                    count={elem.count}
                                    label={elem.name}
                                    />

                            </div>);
                    }
                }
                )}
                
            </div>
            {dataList.length > showLimitMenu &&
                <ButtonShowAll handleClick={handleClickShowAll} />}

            {showLimitMenu > limit &&
                <ButtonHide handleClick={handleClickHide} />}
        </fieldset>
    );
}