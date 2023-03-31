import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { ProductItem } from "../../catalog/interfaces/interfaces";
import { addNewProduct, editProduct } from "../../catalog/redux/productSlice";

interface UseProductDataProps {
    productData: ProductItem,
    action: 'add' | 'edit'
}


export default function useProductForm({ productData, action }: UseProductDataProps) {
    const [product, setProduct] = useState(productData);
    const dispatch = useAppDispatch();

    const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, volume: e.target.value });
    }


    const handleTypeCare = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setProduct({ ...product, typeCare: [...product.typeCare, e.target.value] })
        } else {
            setProduct({ ...product, typeCare: [...product.typeCare.filter(elem => elem !== e.target.value)] })
        }
    }


    const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, [e.target.name]: +e.target.value });
    }


    const handleInputString = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }


    const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setProduct({ ...product, description: e.target.value });
    }
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (action === 'edit') dispatch(editProduct(product));
        if (action === 'add') dispatch(addNewProduct(product));
    }


    return {
        product,
        handleDescription,
        handleInputNumber,
        handleInputString,
        handleSubmit,
        handleTypeCare,
        handleVolume
    }

}