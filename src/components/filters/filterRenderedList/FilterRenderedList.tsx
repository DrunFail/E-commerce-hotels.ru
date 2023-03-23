import { brandList, manufactList } from "../../../fakeData/helpers";
import ButtonApplyFilter from "../../../UI/buttons/buttonApplyFilter/ButtonApplyFilter";
import ButtonRemove from "../../../UI/buttons/buttonRemove/ButtonRemove";
import { filterOptions, handCareList } from "../constants";
import FilterCheckbox from "../filterCheckbox/FilterCheckbox";
import FilterListColumn from "../filterListColumn/FilterListColumn";
import FilterPrice from "../filterPrice/FilterPrice";
import styles from './FilterRenderedList.module.scss';

export default function FilterRenderedList() {
    const input = document.querySelector('input[name="q"]:checked');
    console.log(input)

    return (
        <div className={styles.list}>
            <h4>Подбор по параметрам</h4>
            <FilterPrice />
            <FilterCheckbox filterName={"Производитель"} dataList={manufactList} />
            <FilterCheckbox filterName={"Бренд"} dataList={brandList} />
            <div className={styles.resetFilter }>
                <ButtonApplyFilter />
                <ButtonRemove />
            </div>
            <FilterListColumn nameFilter={"Уход за телом"} dataList={filterOptions} />
            <FilterListColumn nameFilter={"Уход за руками"} dataList={handCareList} />
        </div>

    );
}