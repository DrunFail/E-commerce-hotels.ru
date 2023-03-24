import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import ButtonSearch from "../../buttons/buttonSearch/ButtonSearch";
import './SearchInput.scss';

export default function SearchInput() {
    return (
        <div className='search-input'>
            <input type='text' placeholder='Поиск...'/>
            <div className='button-container'>
                <ButtonSearch>
                    <SpriteIcon id='search' />
                </ButtonSearch>
            </div>
        </div>

    );
}