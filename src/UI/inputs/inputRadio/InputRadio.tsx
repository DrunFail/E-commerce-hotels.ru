interface InputRadioProps {
    id: string,
    value: string,
    name: string,
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}


export default function InputRadio({ id, value, name, handleChange }: InputRadioProps) {
    return (
        <>
           
            <input
                id={id}
                value={value }
                onChange={handleChange}
                type='radio'
                name={name} />
            <label htmlFor={id}>{value}</label>
        </>
    );
}