import { toggleFilterStatus } from '../../../components/filters/redux/filterSlice';
import { useAppDispatch } from '../../../redux/hooks';
import styles from './ButtonApplyFilter.module.scss';



export default function ButtonApplyFilter() {

    const dispatch = useAppDispatch();


    return (
        <button
            onClick={() => dispatch(toggleFilterStatus())}
            className={styles.button}
            type='button'>
            Показать
        </button>
    );
}