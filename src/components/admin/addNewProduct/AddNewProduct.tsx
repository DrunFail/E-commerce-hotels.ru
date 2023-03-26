import { useState } from "react";
import InputField from "../../../UI/inputs/inputField/InputField";
import { ProductItem } from "../../catalog/interfaces/interfaces";


const initialProduct = {
    url: "https://ir.ozone.ru/s3/multimedia-s/wc1000/6061382800.jpg ",
    title: "",
    volume: "",
    size: 0,
    code: 0,
    manufacturer: "",
    brand: "",
    description: "",
    price: 0,
    typeCare: []
}




export default function AddNewProduct() {
    const [newProduct, setNewProduct] = useState<ProductItem>(initialProduct);

    //const handleAddProduct = (product: ProductItem) => {
    //    setState(state => [...state, product]);
    //    localStorage.setItem(local, JSON.stringify(state));
    //}

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        /*handleAddProduct(newProduct);*/
    }




    return (
        <form onSubmit={handleSubmit}>

            <InputField
                title='Название'
                id='title'
                name='title'
                value={newProduct.title}
                handleChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} />
            <div>
                <label>Описание</label>
                <textarea name='description' />
            </div>
            <fieldset>
                <legend>Тип размера</legend>
                <div>
                    <label>Объем</label>
                    <input value='Объем' onChange={(e) => setNewProduct({ ...newProduct, volume: e.target.value })} type='radio' name='typeVolume' />
                </div>
                <div>
                    <label>Вес</label>
                    <input value='Вес' onChange={(e) => setNewProduct({ ...newProduct, volume: e.target.value })} type='radio' name='typeVolume' />
                </div>
            </fieldset>
            <InputField
                title={'Объем'}
                id={'size'}
                name={'size'}
                value={newProduct.size}
                handleChange={(e) => setNewProduct({ ...newProduct, size: +e.target.value })}
            />
            <InputField
                title={'Производитель'}
                id={'manufacturer'}
                name={'manufacturer'}
                value={newProduct.manufacturer}
                handleChange={(e) => setNewProduct({ ...newProduct, manufacturer: e.target.value })}
            />
            <InputField
                title={'Брэнд'}
                id={'brand'}
                name={'brand'}
                value={newProduct.brand}
                handleChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
            />
            <InputField
                title={'Код'}
                id={'code'}
                name={'code'}
                value={newProduct.code}
                handleChange={(e) => setNewProduct({ ...newProduct, code: +e.target.value })}
            />
            <InputField
                title={'Цена'}
                id={'price'}
                name={'price'}
                value={newProduct.price}
                handleChange={(e) => setNewProduct({ ...newProduct, price: +e.target.value })}
            />
            <InputField
                title={'Url изображения'}
                id={'url'}
                name={'url'}
                value={newProduct.url}
                handleChange={(e) => setNewProduct({ ...newProduct, url: e.target.value })}
            />





            <fieldset onChange={(e) => {
                const el = (e.currentTarget as HTMLFieldSetElement).elements;

                const x = [];
                for (let elem of el) {
                    if ((elem as HTMLInputElement).checked) {

                        x.push((elem as HTMLInputElement).value)

                        console.log(x)
                    }
                }
                setNewProduct({ ...newProduct, typeCare: [...x] })

            }}>
                <legend>Тип ухода</legend>
                <input value='body' type='checkbox' name='typeCare' id='body' />
                <label htmlFor='body'>body</label>

                <input value='face' type='checkbox' name='typeCare' id='face' />
                <label htmlFor='face'>face</label>

                <input value='foot' type='checkbox' name='typeCare' id='foot' />
                <label htmlFor='foot'>foot</label>

                <input value='hand' type='checkbox' name='typeCare' id='hand' />
                <label htmlFor='hand'>hand</label>

            </fieldset >



            <button type='submit'>add</button>

        </form>

    
    );
}