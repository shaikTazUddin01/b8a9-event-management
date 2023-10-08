import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../FireBase/FireBase.config'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const[user,setUser]=useState();
    const[loader,setloader]=useState(true)

    const handleSignUp = (email, password) => {
        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

   const handleSignIn=(email,password)=>{
    setloader(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

  const handleSignOut=()=>{
    setloader(true)
    return signOut(auth)
  }

  const handleGoogleSignIn=()=>{
    setloader(true)
    const provider=new GoogleAuthProvider
    return signInWithPopup(auth,provider)
  }
   useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setloader(false)
    })
    
    return () => {
        unSubscribe();
    }

   },[])

//    console.log(user)
    const AuthInFo = {
        handleSignUp,
        handleSignIn,
        handleSignOut,
        user,
        handleGoogleSignIn,
        loader
    };



    return (
        <AuthContext.Provider value={AuthInFo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;