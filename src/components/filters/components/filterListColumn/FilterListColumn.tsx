import { useResize } from '../../../../hooks/useResize';
import { useAppDispatch } from '../../../../redux/hooks';
import InputRadio from '../../../../UI/inputs/inputRadio/InputRadio';
import { addTypeCareFilter } from '../../redux/filterSlice';
import styles from './FilterListColumn.module.scss';


interface FilterListColumnProps {
    nameFilter: string,
    dataList: string[]
}


export default function FilterListColumn({ nameFilter, dataList }: FilterListColumnProps) {
    const size = useResize();
    const dispatch = useAppDispatch();

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, index:number, name:string) => {
        const input = document.getElementById(name + index);
        if (input) (input as HTMLInputElement).checked = true;
        dispatch(addTypeCareFilter({ value: e.target.value }))
    }

    return (
        <div className={styles.filter}>
            {size < 800 || <p>{nameFilter}</p>}

            <div className={styles.list}>
                {dataList.map((elem, index) =>
                    <div key={index} className={styles.item}>
                        <InputRadio
                            id={'typeProduct' + index}
                            value={elem}
                            name='typeProduct'
                            handleChange={(e) => handleChangeInput(e, index, 'typeProduct2')} />

                    </div>
                )}
            </div>
        </div>
    );
}