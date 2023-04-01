import React from "react";
import { useState } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { addTypeSort } from "../../redux/filterSlice";
import './Sort.scss';


const sortBy = [{
    name: 'сначала дороже',
    value: 'priceDesc'
}, {
    name: 'сначала дешевле',
    value: 'priceAsc'
}, {
    name: 'название(уб)',
    value: 'nameDesc'
}, {
    name: 'название(возр)',
    value: 'nameAsc'
}];



export default function Sort() {
    const [sortState, setSortState] = useState('название(возр)');
    const [showOption, setShowOption] = useState(false);
    const dispatch = useAppDispatch();
   

   
    

    return (
        <div className='sort-container'>
            <p>Cортировка:</p>
            <div className='button' onClick={() => setShowOption(true)}>
                <button >{sortState}</button>
                <div className='triangle'></div>

                <div className={showOption ? 'visible' : 'offscreen'}>
                    {sortBy.map((elem, index) =>
                        <React.Fragment key={index }>
                            <input 
                                id={elem.value}
                                type='radio'
                                name='sort'
                                onChange={() => setShowOption(false)}
                               
                               
                           />
                            <label onClick={() => {
                                setSortState(elem.name);
                                dispatch(addTypeSort({ value: elem.value }))
                                
                            }} htmlFor={elem.value}>{elem.name}</label>
                        </React.Fragment>
                    )}
                </div>
            </div>
            

        </div>
    );
}