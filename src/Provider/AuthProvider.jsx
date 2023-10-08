import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../FireBase/FireBase.config'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)

    const AuthInFo="taz"
    return (
        <AuthContext.Provider value={AuthInFo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;