import { auth } from "@/app/fairebase/firebase.init"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { logout, setLoading, setUser } from "./slice";







// register

export const registerUser=(name,email,password,phone)=>async(dispatch)=>{
    dispatch(setLoading(true))
    try {
        const userCredential=await createUserWithEmailAndPassword(auth,email,password)
        const user=userCredential.user;
      // ✅ displayName update
    await updateProfile(user, { displayName: name, phoneNumber: phone });

    // ✅ Reload user info
    await user.reload()

        dispatch(setUser({name,email,phone}))
    } catch (error) {
        console.log("Error registering",error.message)
    }finally{
        dispatch(setLoading(false))
    }
}


//  Logout user
export const logOutUser=()=>async(dispatch)=>{
   try {
    dispatch(setLoading(true))
    await signOut(auth)
    dispatch(logout())
   } catch (error) {
    console.error('logout error',error.message )
   }finally{
    dispatch(setLoading(false))
   }
}

// login
export const logIn=(email,password)=>async(dispatch)=>{

    
    try {
       dispatch(setLoading(true)) 
      const user=await signInWithEmailAndPassword(auth,email,password)
    const firebaseUser = userCredential.user;

    // map Firebase user to your Redux state shape
    dispatch(setUser({
      name: firebaseUser.displayName || "",
      email: firebaseUser.email,
      phone: firebaseUser.phoneNumber || ""
    }));

    console.log('Logged in user:', firebaseUser);
    } catch (error) {
        console.error(error.message)
    }finally{
        dispatch(setLoading(false))
    }
}
