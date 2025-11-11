'use client'
const { createSlice } = require("@reduxjs/toolkit");
import Swal from "sweetalert2";

const getCartFromStorage = () => {
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : []
    }
    return []
}

const calculateTotalPrice = (items) => {
    return items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
}

const itemsFromStorage = getCartFromStorage()
const initialState = {
    items: itemsFromStorage,
    totalPrice: calculateTotalPrice(itemsFromStorage)
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const payload = JSON.parse(JSON.stringify(action.payload));
            const item = state.items.find(i => i.id === payload.id);

            console.log("payload", payload);
            console.log("item", item);

            if (item) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Already Added To Cart!",
                });
              
            } else {
                state.items.push(action.payload);
                state.totalPrice = calculateTotalPrice(state.items); // Recalculate total
                // show modal
                Swal.fire({
                    icon: "success",
                    title: "Added to Cart",
                    text: `${action.payload.name} (${action.payload.size.toUpperCase()}) added successfully!`,
                });
                if (typeof window !== "undefined") {
                    localStorage.setItem('cart', JSON.stringify(state.items))
                }
            }
        },
        increaseQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload.id)
            if (item.quantity === item.stock) {
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: "stock not available!",
                });
                return
            }
            if (item) {
                item.quantity += 1;
                item.totalPrice = item.price * item.quantity;
                state.totalPrice = calculateTotalPrice(state.items); // Recalculate total
                if (typeof window !== "undefined") {
                    localStorage.setItem('cart', JSON.stringify(state.items))
                }
            }
        },
        decreaseQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload.id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    item.totalPrice = item.price * item.quantity;
                } else {
                    // Remove item if quantity becomes 0
                    // state.items = state.items.filter((i) => i.id !== action.payload.id)
                }
                state.totalPrice = calculateTotalPrice(state.items); // Recalculate total
                if (typeof window !== "undefined") {
                    localStorage.setItem('cart', JSON.stringify(state.items))
                }
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((i) => i.id !== action.payload.id)
            state.totalPrice = calculateTotalPrice(state.items); // Recalculate total
            if (typeof window !== "undefined") {
                localStorage.setItem('cart', JSON.stringify(state.items))
            }
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
            if (typeof window !== "undefined") {
                localStorage.removeItem('cart')
            }
        }
    }
})

export const { addToCart, increaseQty, decreaseQty, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;