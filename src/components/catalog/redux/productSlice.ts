import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/store/store';
import { ProductItem } from '../interfaces/interfaces';
import data from '../../../fakeData/data.json';

const LOCAL = 'productList-hotels.ru';


const initialState = (): ProductItem[] => {
    let item = localStorage.getItem(LOCAL);
    if (item && item.length) {
        return JSON.parse(item)
    } else {
        localStorage.setItem(LOCAL, JSON.stringify(data))
        return data
    }
}




export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {


        addNewProduct(state, action: PayloadAction<ProductItem>) {
            state.push(action.payload)
            localStorage.setItem(LOCAL, JSON.stringify(state))
        },

        editProduct(state, action: PayloadAction<ProductItem>) {
           return  state.map(elem => elem.code === action.payload.code
                ? action.payload
                : elem)
        },

        deleteProduct(state, action: PayloadAction<number>) {
            const newState = state.filter((elem) => elem.code !== action.payload)
            localStorage.setItem(LOCAL, JSON.stringify(newState))
             return newState
        },
    },

})

export const { addNewProduct,
    editProduct,
    deleteProduct,
} = productSlice.actions



export default productSlice.reducer
