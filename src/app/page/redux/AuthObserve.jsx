'use client'
import { auth } from '@/app/fairebase/firebase.init'
import { onAuthStateChanged } from 'firebase/auth'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout, setLoading, setUser } from './slice'

export default function AuthObserve() {
    const dispatch=useDispatch()
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser?.email){
         
                // user logged in
                dispatch(setUser({
                    name:currentUser.displayName,
                    email:currentUser.email,
                    phone:currentUser.phone
                }))
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
