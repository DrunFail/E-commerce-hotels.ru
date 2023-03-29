import { useAppDispatch } from '../../../../redux/hooks';
import { changePriceFrom, changePriceTo } from '../../redux/filterSlice';
import styles from './FilterPrice.module.scss';


interface PriceFilterProps {
    price: { from: string, to: string }
}

export default function PriceFilter({ price }: PriceFilterProps) {
    const dispatch = useAppDispatch();

    const handlePriceFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changePriceFrom({ value: e.target.value }))
    }

    const handlePriceTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changePriceTo({ value: e.target.value }))
    }



    return (
        <div className={styles.filter}>
            <p>Цена</p>
            <div className={styles.inputs}>
                <input
                    inputMode='numeric'
                    value={price.from}
                    onChange={handlePriceFrom}
                    placeholder='0' />
                <span>-</span>
                <input
                    inputMode='numeric'
                    value={price.to}
                    onChange={handlePriceTo}
                    placeholder='10000' />
            </div>
        </div>
    );
}



