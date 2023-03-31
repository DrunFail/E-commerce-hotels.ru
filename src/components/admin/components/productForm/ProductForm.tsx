import InputField from "../../../../UI/inputs/inputField/InputField";
import InputRadio from "../../../../UI/inputs/inputRadio/InputRadio";
import TextArea from "../../../../UI/textArea/TextArea";
import { ProductItem } from "../../../catalog/interfaces/interfaces";
import TypesOfCare from "../typesOfCare/TypesOfCare";
import styles from './ProductForm.module.scss';

interface ProductFormProps {
product: ProductItem,
    handleSubmit: React.FormEventHandler,
    handleInputString: React.ChangeEventHandler,
    handleDescription: React.ChangeEventHandler,
    handleVolume: React.ChangeEventHandler,
    handleInputNumber: React.ChangeEventHandler,
handleTypeCare: React.ChangeEventHandler
}



export default function ProductForm({product,handleSubmit, handleInputString, handleDescription, handleVolume, handleInputNumber, handleTypeCare}: ProductFormProps) {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            

            <div className={styles.container}>
                <InputField
                    title='Название'
                    id='title'
                    name='title'
                    value={product.title}
                    handleChange={handleInputString} />
            </div>

            <TextArea
                value={product.description}
                handleChange={handleDescription}
                id="description"
                title="Описание"
                name="description" />


            <div className={styles.container}>
                <legend>Тип размера</legend>
                <div>
                    <InputRadio
                        id="volume"
                        value="Объем"
                        name="typVolume"
                        checked={product.volume === 'объем'}
                        handleChange={handleVolume}
                    />

                    <InputRadio
                        id="weight"
                        value="Вес"
                        name="typVolume"
                        handleChange={handleVolume}
                        checked={product.volume === 'вес'}
                    />

                </div>
            </div>

            <div className={styles.container} >
                <InputField
                    title={'Объем'}
                    id={'size'}
                    name={'size'}
                    value={product.size}
                    handleChange={handleInputNumber}
                />
            </div>
            <div className={styles.container}>
                <InputField
                    title={'Производитель'}
                    id={'manufacturer'}
                    name={'manufacturer'}
                    value={product.manufacturer}
                    handleChange={handleInputString}
                />
            </div>
            <div className={styles.container}>
                <InputField
                    title={'Брэнд'}
                    id={'brand'}
                    name={'brand'}
                    value={product.brand}
                    handleChange={handleInputString}
                />
            </div>
            <div className={styles.container}>

                <InputField
                    title={'Код'}
                    id={'code'}
                    name={'code'}
                    value={product.code}
                    handleChange={handleInputNumber}
                />
            </div>
            <div className={styles.container}>
                <InputField
                    title={'Цена'}
                    id={'price'}
                    name={'price'}
                    value={product.price}
                    handleChange={handleInputNumber}
                />
            </div>

            <div className={styles.container}>
                <InputField
                    title={'Url изображения'}
                    id={'url'}
                    name={'url'}
                    value={product.url}
                    handleChange={handleInputString}
                />
            </div>
            <div className={styles.container}>
                <TypesOfCare
                    typeCare={product.typeCare}
                    handleTypeCare={handleTypeCare} />
            </div>
            <button type='submit'>Добавить продукт</button>

        </form>
    
    
    );
}