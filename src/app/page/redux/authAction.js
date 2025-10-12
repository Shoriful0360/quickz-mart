import { auth } from "@/app/fairebase/firebase.init"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { setLoading, setUser } from "./slice";






// register

export const registerUser=(name,email,password,phone)=>async(dispatch)=>{
    dispatch(setLoading(true))
    try {
        const userCredential=await createUserWithEmailAndPassword(auth,email,password)
        const user=userCredential.user;
    //   update display name
    await updateProfile(user,{displayName:name})

        dispatch(setUser({name,email,phone}))
    } catch (error) {
        console.log("Error registering",error.message)
    }
}

// 