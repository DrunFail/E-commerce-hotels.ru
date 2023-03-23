import React from 'react';
import { inputChangeSync } from '../synсInput';
import styles from './FilterListRow.module.scss';


interface FilterListRowProps {
    dataList: string[]
}

const splitString = (str: string) => {
    const firstSpaceIndex = str.trim().indexOf(' ');
    if (firstSpaceIndex == -1) return str;
    const firstWord = str.slice(0, firstSpaceIndex);
    const remaining = str.slice(firstSpaceIndex + 1);
    return { firstWord, remaining };
} 

const renderString = (elem: string, index: number) => {
    const z = splitString(elem);
    if (typeof (z) == 'string') return <p key={index }>{z}</p>
    return <>
        <p>{z.firstWord}</p>
        <p>{z.remaining}</p>
    </>
        
    
}



export default function FilterListRow({ dataList }: FilterListRowProps) {
    
    return (
        <div className={styles.filter}>
            {dataList.map((elem, index) =>
                <div key={index} className={styles.item }>
                    <input onChange={(e) => inputChangeSync(e, index, 'types')} type="radio" id={'type' +index} name='q'/>
                    <label htmlFor={'type' + index}>
                            {renderString(elem, index)}
                    </label>
                </div>
            )}
        </div>
    );
}