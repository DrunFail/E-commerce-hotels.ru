import styles from './InputRadio.module.scss';


interface InputRadioProps {
    id: string,
    value: string,
    name: string,
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}


export default function InputRadio({ id, value, name, handleChange }: InputRadioProps) {
    return (
        <div className={styles.input }>
            <label htmlFor={id}>{value}</label>
            <input
                id={id}
                value={value }
                onChange={handleChange}
                type='radio'
                name={name } />
        </div>
    );
}