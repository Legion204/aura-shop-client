import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const authContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // user registration with email and pass
    const userRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };

    // user login with email and pass
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // login with google
    const googleProvider = new GoogleAuthProvider();
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    // user logout
    const userLogout = () =>{
        setLoading(true)
        return signOut(auth)
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [user])


    const data = {user,userLogin,userRegister,userLogout,auth,loading,signInGoogle}
    return (
        <authContext.Provider value={data}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;