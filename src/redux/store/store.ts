import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../../components/cart/redux/cartSlice';
import productReducer from '../../components/catalog/redux/productSlice';
import filterReducer from '../../components/filters/redux/filterSlice';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        filter: filterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch