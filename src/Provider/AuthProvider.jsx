import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
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


    const data = {user,userLogin,userRegister,userLogout,auth,loading}
    return (
        <authContext.Provider value={data}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;