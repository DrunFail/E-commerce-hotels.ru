import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import InputCheckbox from "../../../UI/inputs/inputCheckbox/InputCheckbox";
import InputField from "../../../UI/inputs/inputField/InputField";

import InputRadio from "../../../UI/inputs/inputRadio/InputRadio";
import TextArea from "../../../UI/textArea/TextArea";
import { ProductItem } from "../../catalog/interfaces/interfaces";
import { addNewProduct } from "../../catalog/redux/productSlice";
import styles from './AddNewProduct.module.scss';


const initialProduct = {
    url: "https://ir.ozone.ru/s3/multimedia-s/wc1000/6061382800.jpg ",
    title: "",
    volume: "",
    size: 0,
    sizeUnit: "",
    code: 0,
    manufacturer: "",
    brand: "",
    description: "",
    price: 0,
    typeCare: []
}




export default function AddNewProduct() {
    const [newProduct, setNewProduct] = useState<ProductItem>(initialProduct);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(addNewProduct(newProduct));
        setNewProduct(initialProduct);
    }

    const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
        setNewProduct({ ...newProduct, volume: e.target.value })
    }

    const handleTypeCare = (e: React.FormEvent<HTMLFieldSetElement>) => {
        const el = (e.currentTarget as HTMLFieldSetElement).elements;

        const x = [];
        for (let elem of el) {
            if ((elem as HTMLInputElement).checked) {

                x.push((elem as HTMLInputElement).value)

            }
        }
        setNewProduct({ ...newProduct, typeCare: [...x] })

    }


    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewProduct({ ...newProduct, title: e.target.value })
    }

    const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewProduct({ ...newProduct, description: e.target.value })
    }

    const handleSize = (e: ChangeEvent<HTMLInputElement>) => {
        setNewProduct({ ...newProduct, size: +e.target.value })
    }

    const handleManufacturer = (e: ChangeEvent<HTMLInputElement>) => {
        setNewProduct({ ...newProduct, manufacturer: e.target.value })
    }

    const handleBrand = (e: ChangeEvent<HTMLInputElement>) => {
        setNewProduct({ ...newProduct, brand: e.target.value })
    }

    const handleCode = (e: ChangeEvent<HTMLInputElement>) => {
        setNewProduct({ ...newProduct, code: +e.target.value })
    }

    const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
        setNewProduct({ ...newProduct, price: +e.target.value })
    }

    const handleUrlImage = (e: ChangeEvent<HTMLInputElement>) => {
        setNewProduct({ ...newProduct, url: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Добавление нового продукта</h2>

            <div>
                <InputField
                    title='Название'
                    id='title'
                    name='title'
                    value={newProduct.title}
                    handleChange={handleTitle} />
            </div>

            <TextArea
                value={newProduct.description}
                handleChange={handleDescription}
                id="description"
                title="Описание"
                name="description" />


            <fieldset className={styles.fieldVolume}>
                <legend>Тип размера</legend>
                <div>
                    <InputRadio
                        id="volume"
                        value="Объем"
                        name="typVolume"
                        handleChange={handleVolume}
                    />

                    <InputRadio
                        id="weight"
                        value="Вес"
                        name="typVolume"
                        handleChange={handleVolume} />

                </div>
            </fieldset>

            <div>
                <InputField
                    title={'Объем'}
                    id={'size'}
                    name={'size'}
                    value={newProduct.size}
                    handleChange={handleSize}
                />
            </div>
            <div>
                <InputField
                    title={'Производитель'}
                    id={'manufacturer'}
                    name={'manufacturer'}
                    value={newProduct.manufacturer}
                    handleChange={handleManufacturer}
                />
            </div>
            <div>
            <InputField
                title={'Брэнд'}
                id={'brand'}
                name={'brand'}
                value={newProduct.brand}
                handleChange={handleBrand}
            />
            </div>
            <div>

                <InputField
                    title={'Код'}
                    id={'code'}
                    name={'code'}
                    value={newProduct.code}
                    handleChange={handleCode}
                />
            </div>
            <div>
                <InputField
                    title={'Цена'}
                    id={'price'}
                    name={'price'}
                    value={newProduct.price}
                    handleChange={handlePrice}
                />
            </div>
            <div>
                <InputField
                    title={'Url изображения'}
                    id={'url'}
                    name={'url'}
                    value={newProduct.url}
                    handleChange={handleUrlImage}
                />
            </div>

            <fieldset onChange={handleTypeCare}>
                <legend>Тип ухода</legend>
                <div>
                    <InputCheckbox
                        value="body"
                        name="typeCare"
                        id="body"
                        title="Для тела" />

                    <InputCheckbox
                        value='face'
                        name='typeCare'
                        id='face'
                        title='Для лица' />

                    <InputCheckbox
                        value='foot'
                        name='typeCare'
                        id='foot'
                        title='Для ног' />

                    <InputCheckbox
                        value='hand'
                        name='typeCare'
                        id='hand'
                        title='Для рук' />
                </div>
            </fieldset >


            <button type='submit'>Добавить продукт</button>

        </form>


    );
}