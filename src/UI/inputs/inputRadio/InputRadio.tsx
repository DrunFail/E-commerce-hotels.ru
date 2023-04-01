interface InputRadioProps {
    id: string,
    value: string,
    name: string,
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    checked?:boolean
}


export default function InputRadio({ id, value, name, handleChange, checked }: InputRadioProps) {
    return (
        <>
           
            <input
                id={id}
                value={value}
                onChange={handleChange}
                type='radio'
                name={name}
                checked={checked }            />
            <label htmlFor={id}>{value}</label>
        </>
    );
}