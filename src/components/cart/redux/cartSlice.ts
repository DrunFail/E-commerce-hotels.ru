import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../redux/store/store'
import { ShoppingCartItem } from '../interface/interfaces'


const initialState = (): ShoppingCartItem[] => {
    let item = localStorage.getItem('cart')
    if (item) {
        return JSON.parse(localStorage.cart)
    } else {
        return []
    }
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {


        addCartItem(state, action: PayloadAction<ShoppingCartItem>) {
            state.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state))
        }
        ,


        deleteCartItem(state, action: PayloadAction<number>) {
            const newState = state.filter((elem: ShoppingCartItem) => elem.code !== action.payload)
            localStorage.setItem('cart', JSON.stringify(newState))
            return newState
        },


        incrementCartItem(state, action: PayloadAction<number>) {
            const cartItem = state.find((elem: ShoppingCartItem) => elem.code === action.payload)
            if (cartItem) {
                cartItem.count += 1
                localStorage.setItem('cart', JSON.stringify(state))
            }

        },


        decrementCartItem(state, action: PayloadAction<number>) {
            const cartItem = state.find((elem: ShoppingCartItem) => elem.code === action.payload)
            if (cartItem) {
                if (cartItem.count === 1) {
                    cartItem.count = 1
                } else {
                    cartItem.count -= 1
                }
                localStorage.setItem('cart', JSON.stringify(state))

            }
        },
        clearCart() {
            localStorage.removeItem('cart');
            initialState();
        }

    },

})

export const { addCartItem,
    deleteCartItem,
    incrementCartItem,
    decrementCartItem,
    clearCart
} = cartSlice.actions

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
