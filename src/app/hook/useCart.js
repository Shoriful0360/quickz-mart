import { useSelector } from "react-redux"

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

export const useRole=()=>{
    const {user,loading}=useSelector((state)=>state.auth)
   const [role,setRole]=useState()
   useEffect(() => {
      // If still loading auth, don't check anything
      if (loading) return;
  
    
  
      // Fetch role from backend
      const fetchRole = async () => {
        const res = await fetch(`/api/user/${user?.email}`);
        const data = await res.json();
        setRole(data);
      };
  
      fetchRole();
    }, [user, loading]); 
    return role
}