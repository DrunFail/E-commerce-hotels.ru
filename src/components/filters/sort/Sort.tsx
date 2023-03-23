import { useState } from "react";
import './Sort.scss';

export default function Sort() {
    const [sortState, setSortState] = useState('название');
    const [showOption, setShowOption] = useState(false);

    const sortBy = ['сначала дороже', 'сначала дешевле', 'название'];

    const handleClick = () => {
        setShowOption(!showOption);
    }

    const handleOption = (elem: string) => {
        setSortState(elem);
        setShowOption(false);
    }

    return (
        <div className='sort-container'>
            <p>Cортировка:</p>
            <div className='button' onClick={handleClick}>
                <button >{sortState}</button>
                <div className='triangle'></div>

                <div className={showOption ? 'visible' : 'offscreen'}>
                    {sortBy.map((elem, index) =>
                        <p key={index}
                            onClick={() => handleOption(elem)}>
                            {elem}</p>)}
                </div>
            </div>
            

        </div>
    );
}