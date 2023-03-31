import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import { selectProductById } from '../../catalog/redux/productSlice';
import ProductForm from '../components/productForm/ProductForm';
import useProductForm from '../hooks/useProductForm';



export default function EditProduct() {
    const { editProductId } = useParams();

    if (!editProductId) {
        throw new Error('dont get product id for edit')
    }
   
    const findProduct = useAppSelector(state => selectProductById(state, +editProductId));
    if (!findProduct) {
        throw new Error('dont get product from store');
    }

    const {
        product,
        handleDescription,
        handleInputNumber,
        handleInputString,
        handleSubmit,
        handleTypeCare,
        handleVolume } = useProductForm({ productData: findProduct, action: 'edit' });


    return (
        <>
            <ProductForm
                product={product }
                handleSubmit={handleSubmit}
                handleInputString={handleInputString }
                handleDescription={handleDescription}
                handleVolume={handleVolume}
                handleInputNumber={handleInputNumber}
                handleTypeCare={handleTypeCare} />
               
        </>
    );
}