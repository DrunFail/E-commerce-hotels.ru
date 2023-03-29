import { useState } from "react";
import { useResize } from "../../../../hooks/useResize";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import ButtonApplyFilter from "../../../../UI/buttons/buttonApplyFilter/ButtonApplyFilter";
import ButtonArrowRight from "../../../../UI/buttons/buttonArrowRight/ButtonArrowRight";
import ButtonRemove from "../../../../UI/buttons/buttonRemove/ButtonRemove";
import { filterOptions, handCareList } from "../../constants";
import { resetFilterStatus, selectBrandFilter, selectManufactFilter, selectPriceFilter} from "../../redux/filterSlice";
import FilterCheckbox from "../filterCheckbox/FilterCheckbox";
import FilterListColumn from "../filterListColumn/FilterListColumn";
import FilterPrice from "../filterPrice/FilterPrice";
import styles from './FilterRenderedList.module.scss';


export default function FilterRenderedList() {
    const size = useResize();
    const [showFilter, setShowFilter] = useState(size < 800 ? false : true);

    const manufact = useAppSelector(selectManufactFilter);
    const brand = useAppSelector(selectBrandFilter);
    const price = useAppSelector(selectPriceFilter);

    const toggleShowFilter = () => {
        setShowFilter(showFilter => !showFilter)
    }
    const dispatch = useAppDispatch();

    return (
        <div className={styles.list}>
            <div>
                <div className={styles.title }>
                    <h4>Подбор по параметрам</h4>
                    {size < 800 &&
                        <ButtonArrowRight
                            handleClick={toggleShowFilter}
                            showFilter={showFilter} />}
                </div>
                {showFilter &&
                    <div>

                        <FilterPrice
                            price={price} />

                        <FilterCheckbox
                            filterName={"Производитель"}
                            dataList={manufact} />

                        <FilterCheckbox
                            filterName={"Бренд"}
                            dataList={brand} />

                        <div className={styles.resetFilter}>
                            <ButtonApplyFilter  />
                            <ButtonRemove
                                onClick={() => dispatch(resetFilterStatus())} />
                        </div>
                    </div>}

            </div>

            <FilterListColumn
                nameFilter={"Уход за телом"}
                dataList={filterOptions} />

            {size < 800 ||
                <FilterListColumn
                    nameFilter={"Уход за руками"}
                    dataList={handCareList} />}
        </div>

    );
}