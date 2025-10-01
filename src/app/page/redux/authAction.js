import { auth } from "@/app/fairebase/firebase.init"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { setUser } from "./slice";
import { useDispatch } from "react-redux";





// register

export const registerUser=(email,password)=>async(dispatch)=>{
    dispatch(setL)
    try {
        const userCredential=await createUserWithEmailAndPassword(auth,email,password)
        const user=userCredential.user;
        dispatch(setUser({name:user.displayName || "",email:user.email}))
    } catch (error) {
        console.log("Error registering",error.message)
    }
}