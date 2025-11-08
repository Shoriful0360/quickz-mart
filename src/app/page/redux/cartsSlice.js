'use client'
const { createSlice } = require("@reduxjs/toolkit");
const { default: Swal } = require("sweetalert2");

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
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Already Added To Cart!",
                });
            } else {
                state.items.push(action.payload);
                state.totalPrice = calculateTotalPrice(state.items); // Recalculate total
                if (typeof window !== "undefined") {
                    localStorage.setItem('cart', JSON.stringify(state.items))
                }
            }
        },
        increaseQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload.id)
            if(item.quantity === item.stock){
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