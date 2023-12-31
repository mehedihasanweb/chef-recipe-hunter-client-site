import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader]= useState(true)
    // console.log(user);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        setLoader(true)
        return signOut(auth)
    }

    const googleLogin =()=>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin =()=>{
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            setUser(loggedUser)
            setLoader(false)
        } )
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        googleLogin,
        loader,
        logOut,
        githubLogin
    }   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;