interface InputCheckboxCountProps {
    checked: boolean,
    handleClick: React.ChangeEventHandler<HTMLInputElement>,
    name: string,
    id: string,
    count: number,
    label: string,
    
}


export default function InputCheckboxCount({ checked, handleClick, name, id, count, label}:InputCheckboxCountProps) {
    return (
        <>
            <input
                type='checkbox'
                checked={checked}
                onChange={handleClick}
                name={name}
                id={id}
                           />
            <label htmlFor={id}>
                <p>{label}</p>
                <p>({count})</p>
            </label>
        </>
    );
}