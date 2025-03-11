import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart(state, action) {
            const newItem = action.payload;
            const itemIndex = state.products.find((item) => item.id === newItem.id)
            if (itemIndex) {
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.price

            }
            else {
                state.products.push({
                    id: newItem,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image
                })
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },
        removeFormCart(state, action) {
            const id = action.payload;
            const itemIndex = state.products.find((item) => item.id === id);
            if (itemIndex) {
                state.totalPrice -= itemIndex.totalPrice;
                state.totalQuantity -= itemIndex.quantity;
                state.products = state.products.filter(item => item.id !== id);
            }
        },
        increaseQuantity(state, action) {
            const id = action.payload;
            const itemIndex = state.products.find((item) => item.id === id);
            if (itemIndex) {
                itemIndex.quantity++;
                itemIndex.totalPrice += itemIndex.price;
                state.totalPrice += itemIndex.price;
                state.totalQuantity++;
            }
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const itemIndex = state.products.find((item) => item.id === id);
            if (itemIndex) {
                itemIndex.quantity--;
                itemIndex.totalPrice -= itemIndex.price;
                state.totalPrice -= itemIndex.price;
                state.totalQuantity--;
                if (itemIndex.quantity === 0) {
                    state.products = state.products.filter(item => item.id !== id);
                }
            }
        },
    },
});

export const { addtoCart, removeFormCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer