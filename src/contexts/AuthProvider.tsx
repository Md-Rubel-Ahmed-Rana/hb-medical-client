import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth"
import app from '../firebase/firebase.config';


interface User{
    user: any,
    createUser: (email: string, password: string) => void
}

const auth = getAuth(app)

export const AuthContext = createContext({} as User);

type authProps = {
    children: React.ReactNode
}



const AuthProvider = ({children}: authProps) => {
    const [user, setUser] = useState<React.SetStateAction<{}>>({});

    const createUser = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => setUser(result.user))
        .catch((err) => console.log(err))
    }

    const userInfo = {user, createUser, setUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(() => currentUser)
        })
        return () => unsubscribe()
    },[])
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;