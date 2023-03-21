import styles from './CallbackBlock.module.scss';


interface CallbackData {
    phone: string,
    opening: string,
    linkText: string,
    linkUrl: string
    
}

interface CallbackBlockProps {
    callbackData: CallbackData,
    image: string,
    altImage: string
}


export default function CallbackBlock({callbackData,image,altImage }: CallbackBlockProps) {
    return (
        <div className={styles.callback }>
            <div className={styles['callback-content']}>
                <p>{callbackData.phone}</p>
                <p>{callbackData.opening}</p>
                <a href={callbackData.linkUrl }>{callbackData.linkText}</a>
            </div>

            <img src={image} alt={altImage } />
        </div>
    
    );
}