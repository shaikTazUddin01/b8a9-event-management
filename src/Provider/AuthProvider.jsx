import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../FireBase/FireBase.config'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const[user,setUser]=useState();

    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

   const handleSignIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }

  const handleSignOut=()=>{
    return signOut(auth)
  }

  const handleGoogleSignIn=()=>{
    const provider=new GoogleAuthProvider
    return signInWithPopup(auth,provider)
  }
   useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
    })
    
    return () => {
        unSubscribe();
    }

   },[])

   console.log(user)
    const AuthInFo = {
        handleSignUp,
        handleSignIn,
        handleSignOut,
        user,
        handleGoogleSignIn
    };



    return (
        <AuthContext.Provider value={AuthInFo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;