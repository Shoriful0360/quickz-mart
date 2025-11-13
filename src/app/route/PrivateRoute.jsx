'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({children}) => {

    const user=useSelector((state)=>state.auth.user)
    console.log('private route',user)
    const router=useRouter()
    const loading=useSelector((state)=>state.auth.loading)
    console.log('loading',loading)
    useEffect(()=>{
        if(!user && !loading){
            router.replace('authentication/Login')
        }
    },[user,router,loading])

    if(loading) return <p>Loading...</p>

    if(!user) return null;
    return <>{children}</>
};

export default PrivateRoute;