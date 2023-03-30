import React, { useRef } from "react";
import { useState } from "react";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import { useAppDispatch } from "../../../../redux/hooks";
import { filterOptions } from "../../../filters/constants";
import styles from './TypesOfCare.module.scss';

interface TypesOfCareProps {
    typeCare: string[],
    handleTypeCare: any
}


export default function TypesOfCare({ typeCare, handleTypeCare }: TypesOfCareProps) {
    const contentRef = useRef(null)
    const [showOption, setShowOption] = useState(false);
    const dispatch = useAppDispatch();

    const handleClick = () => {

        setShowOption(false)
    }

    useOutsideClick(contentRef, handleClick);
    return (
        <>
            <p>Тип ухода:</p>
            <div className={styles.dropdown}>
                <div className={styles.content} >
                    {showOption ||
                        <button
                            className={styles.select}
                            type='button'
                            onClick={() => setShowOption(true)}>
                            Выбрать
                        </button>}


                    <div ref={contentRef}
                        className={styles[showOption
                            ? 'visible'
                            : 'offscreen']}>

                        {filterOptions.map((elem, index) =>
                            <React.Fragment key={index}>
                                <input
                                    id={elem}
                                    type='checkbox'
                                    value={elem}
                                    name='typeCare'
                                    onChange={handleTypeCare}
                                />
                                <label htmlFor={elem}>
                                    {elem}
                                </label>
                            </React.Fragment>
                        )}

                    </div>
                </div>
                <div className={styles.result}>
                    <h6>Выбранные типы ухода:</h6>
                    {typeCare.map(elem => <p>{elem}</p>)}
                </div>
            </div>

        </>

    );
}