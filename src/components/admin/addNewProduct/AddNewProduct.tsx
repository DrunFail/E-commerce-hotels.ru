import { ProductItem, SizeUnit, VolumeType } from "../../catalog/interfaces/interfaces";
import ProductForm from "../components/productForm/ProductForm";
import useProductForm from "../hooks/useProductForm";
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
    const {
        product,
        handleDescription,
        handleInputNumber,
        handleInputString,
        handleSubmit,
        handleTypeCare,
        handleVolume } = useProductForm({ productData: initialProduct, action: 'add' });

    return (
        <div className={styles.container }>
            <h1>Добавить новый продукт</h1>
            <ProductForm
                product={product}
                handleSubmit={handleSubmit}
                handleInputString={handleInputString}
                handleDescription={handleDescription}
                handleVolume={handleVolume}
                handleInputNumber={handleInputNumber}
                handleTypeCare={handleTypeCare} />
        </div>
    );
}