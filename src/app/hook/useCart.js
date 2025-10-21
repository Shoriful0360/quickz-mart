const { useEffect, useState } = require("react")


export const useCart=()=>{
    const[carts,setCarts]=useState([])
    useEffect(()=>{
        const loadCart=localStorage.getItem('cart')
        if(loadCart){
            setCarts(JSON.parse(loadCart))
        }
       
    },[])
     return carts
}