import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../../../redux/hooks';
import { addTypeCareFilter } from '../../redux/filterSlice';
import styles from './FilterListRow.module.scss';


interface FilterListRowProps {
    dataList: string[]
}


//разбивает текст на две части firstWord - remaining
const splitString = (str: string) => {
    const firstSpaceIndex = str.trim().indexOf(' ');
    if (firstSpaceIndex == -1) return str;
    const firstWord = str.slice(0, firstSpaceIndex);
    const remaining = str.slice(firstSpaceIndex + 1);
    return { firstWord, remaining };
}


//рендер элемента
const renderString = (elem: string) => {
    const renderedString = splitString(elem);
    //проверка, является строкой или объектом
    if (typeof renderedString == 'string') {
        return <p>{renderedString} </p>;
    }
    return (
        <>
            <p>{renderedString.firstWord}</p>
            <p> {renderedString.remaining} </p>
        </>
    )
}


export default function FilterListRow({ dataList }: FilterListRowProps) {
    const dispatch = useAppDispatch();

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>, index: number, name: string) => {
        const input = document.getElementById(name + index);
        if (input) (input as HTMLInputElement).checked = true;
        dispatch(addTypeCareFilter({ value: e.target.value }))

    }


    return (
        <div className={styles.filter}>
            {dataList.map((elem, index) =>
                <div key={index} className={styles.item}>
                    <input
                        onChange={(e) => handleChangeInput(e, index, 'Уход за телом')}
                        type="radio"
                        id={'typeProduct2' + index}
                        value={elem}
                        name='typeProduct2' />

                    <label htmlFor={'typeProduct2' + index}>
                        {renderString(elem)}
                    </label>
                </div>
            )}
        </div>
    );
}