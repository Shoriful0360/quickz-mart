'use client'
const { createSlice } = require("@reduxjs/toolkit");
const { default: Swal } = require("sweetalert2");



const getCartFromStorage=()=>{
    if(typeof window !=='undefined'){
        const stored=localStorage.getItem('cart');
        return stored ? JSON.parse(stored):[]
    }
    return []
}
const itemsFromStorage = getCartFromStorage()
const initialState={
    items:itemsFromStorage,
    totalPrice:itemsFromStorage.reduce((acc,item)=>acc+item.price * item.quantity,0)
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{


        addToCart:(state,action)=>{
            const item=state.items.find(i=>i.id ===action.payload.id);
            if(item){
                Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "All Ready Add To Cart!",
 
});
            }else{
                state.items.push(action.payload);
                state.totalPrice +=action.payload.price * action.payload.quantity;
                if(typeof window !=="undefined"){
                   localStorage.setItem('cart',JSON.stringify(state.items)) 
                }
                  
            }
          
        },
        increaseQty:(state,action)=>{
            const item=state.items.find(i=>i.id===action.payload.id)
            if(item){
                item.quantity +=1 ; 
                item.totalPrice=item.price * item.quantity;
            }     if(typeof window !=="undefined"){
                   localStorage.setItem('cart',JSON.stringify(state.items)) 
                }
             
          
         
      
        },
        decreaseQty:(state,action)=>{
            const item=state.items.find(i=>i.id===action.payload.id)
            if(item){
                item.quantity -=1;
                item.totalPrice=item.price * item.quantity
            }else if(item && item.quantity ===1){
                state.items=state.items.filter((i)=>i.id !==action.payload.id)
            }
                if(typeof window !=="undefined"){
                   localStorage.setItem('cart',JSON.stringify(state.items)) 
                }
        }
    }
})

export const{addToCart,increaseQty,decreaseQty}=cartSlice.actions;
export default cartSlice.reducer;