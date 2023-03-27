interface InputCheckboxProps {
    value: string,
    name: string,
    id: string,
    title: string
}


export default function InputCheckbox({value, name, id, title }: InputCheckboxProps) {
    return (
        <div>
            <input
                type='checkbox'
                value={value}
                name={name}
                id={id} />
            <label htmlFor={id}>{title}</label>
        </div>
    );
}