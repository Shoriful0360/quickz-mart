'use client'
import { auth } from '@/app/fairebase/firebase.init'
import { onAuthStateChanged } from 'firebase/auth'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout, setLoading, setUser } from './slice'

export default function AuthObserve() {
    const dispatch=useDispatch()
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,async(currentUser)=>{
            if(currentUser?.email){
         const userInfo={
              name:currentUser.displayName,
                    email:currentUser.email,
                    phone:currentUser.phone,
                    role:"customer"
         }
                // user logged in
                dispatch(setUser(userInfo))
                // save  in database
                try {
                  await fetch('/api/user',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({userInfo})
                }) 
             
                
                } catch (error) {
                   
                }
              
            }else{
                dispatch(logout())
            }
            dispatch(setLoading(false))
        })

        // cleanup on unmount
        return ()=>unsubscribe()
    },[dispatch])
  return null
}
