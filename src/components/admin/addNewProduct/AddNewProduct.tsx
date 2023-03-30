import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import InputCheckbox from "../../../UI/inputs/inputCheckbox/InputCheckbox";
import InputField from "../../../UI/inputs/inputField/InputField";

import InputRadio from "../../../UI/inputs/inputRadio/InputRadio";
import TextArea from "../../../UI/textArea/TextArea";
import { ProductItem } from "../../catalog/interfaces/interfaces";
import { addNewProduct } from "../../catalog/redux/productSlice";
import { filterOptions } from "../../filters/constants";
import TypesOfCare from "../components/typesOfCare/TypesOfCare";
import styles from './AddNewProduct.module.scss';


const initialProduct: ProductItem = {
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

    const handleTypeCare = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setNewProduct({ ...newProduct, typeCare: [...newProduct.typeCare, e.target.value] })
        } else {
            setNewProduct({...newProduct, typeCare: [...newProduct.typeCare.filter(elem => elem !== e.target.value)] })
        }
       

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

            <div className={styles.container}>
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


            <div className={styles.container}>
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
            </div>

            <div className={styles.container} >
                <InputField
                    title={'Объем'}
                    id={'size'}
                    name={'size'}
                    value={newProduct.size}
                    handleChange={handleSize}
                />
            </div>
            <div className={styles.container}>
                <InputField
                    title={'Производитель'}
                    id={'manufacturer'}
                    name={'manufacturer'}
                    value={newProduct.manufacturer}
                    handleChange={handleManufacturer}
                />
            </div>
            <div className={styles.container}>
                <InputField
                    title={'Брэнд'}
                    id={'brand'}
                    name={'brand'}
                    value={newProduct.brand}
                    handleChange={handleBrand}
                />
            </div>
            <div className={styles.container}>

                <InputField
                    title={'Код'}
                    id={'code'}
                    name={'code'}
                    value={newProduct.code}
                    handleChange={handleCode}
                />
            </div>
            <div className={styles.container}>
                <InputField
                    title={'Цена'}
                    id={'price'}
                    name={'price'}
                    value={newProduct.price}
                    handleChange={handlePrice}
                />
            </div>

            <div className={styles.container}>
                <InputField
                    title={'Url изображения'}
                    id={'url'}
                    name={'url'}
                    value={newProduct.url}
                    handleChange={handleUrlImage}
                />
            </div>
            <div className={styles.container}>
                <TypesOfCare typeCare={newProduct.typeCare} handleTypeCare={handleTypeCare} />
            </div>
            <button type='submit'>Добавить продукт</button>

        </form>


    );
}