import styles from './TextArea.module.scss';


interface TextAreaProps {
    id: string,
    title: string,
    name: string,
    value: string,
handleChange: React.ChangeEventHandler<HTMLTextAreaElement>
}


export default function TextArea({ id, title, name, handleChange,value }: TextAreaProps) {
    return (
        <div className={styles.textarea }>
            <label htmlFor={id}>{title}</label>
            <textarea onChange={handleChange} id={id} name={name} value={value} />
        </div>
    );
}