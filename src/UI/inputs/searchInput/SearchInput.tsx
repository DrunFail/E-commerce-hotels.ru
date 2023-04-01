import ButtonSearch from "../../buttons/buttonSearch/ButtonSearch";
import './SearchInput.scss';


interface SearchInputProps {
    searchRef: React.RefObject<HTMLInputElement>,
    onClick: React.MouseEventHandler
}


export default function SearchInput({onClick, searchRef }:SearchInputProps) {
   
    return (
        <div className='search-input'>
            <input
                ref={searchRef}
                type='text'
                placeholder='Поиск...' />
            <div className='button-container'>
                <ButtonSearch onClick={onClick } />
            </div>
        </div>
    );
}