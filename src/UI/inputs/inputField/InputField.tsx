
interface InputFieldProps {
    title: string,
    id: string,
    name: string,
    value: string | number,
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}


export default function InputField({title,id, name, value, handleChange }:InputFieldProps) {
    return (
        <div>
            <label htmlFor='title'>{title}</label>
            <input
                id={id }
                name={name}
                value={value}
                onChange={handleChange} />
        </div>
    );
}