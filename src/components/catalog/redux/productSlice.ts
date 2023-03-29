import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/store/store';
import { ProductItem } from '../interfaces/interfaces';
import data from '../../../fakeData/data.json';

const local = 'productList-hotels.ru';

const initialState = (): ProductItem[] => {
    let item = localStorage.getItem(local)
    if (item) {
        return JSON.parse(item)
    } else {
        return data
    }
}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {


        addNewProduct(state, action: PayloadAction<ProductItem>) {
            state.push(action.payload)
            localStorage.setItem(local, JSON.stringify(state))
        },

        deleteProduct(state, action: PayloadAction<number>) {
            const newState = state.filter((elem) => elem.code !== action.payload)
            localStorage.setItem(local, JSON.stringify(newState))
            return newState
        },


       

    },

})

export const { addNewProduct,
    deleteProduct,
} = productSlice.actions

export const selectProduct = (state: RootState) => state.product;

export const selectProductById = (state: RootState, id: number) => state.product.find(elem => elem.code === id);

export const selectProductTitleById = (state: RootState, id: number) => state.product.find(elem => elem.code === id)?.title;

export default productSlice.reducer
