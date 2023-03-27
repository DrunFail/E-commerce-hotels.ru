import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../../components/cart/redux/cartSlice';
import productReducer from '../../components/catalog/redux/productSlice';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch