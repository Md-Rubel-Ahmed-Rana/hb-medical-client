import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from '../firebase/firebase.config';
import swal from 'sweetalert';



interface User{
    user: any,
    createUser: (email: string, password: string, navigate: any) => void
    userLogin: (email: string, password: string, navigate: any) => void
    logout: () => void
}

const auth = getAuth(app)

export const AuthContext = createContext({} as User);

type authProps = {
    children: React.ReactNode
}



const AuthProvider = ({children}: authProps) => {
    const [user, setUser] = useState<React.SetStateAction<{}>>({});

    const createUser = (email: string, password: string, navigate: any) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user)
            swal("Done", "Account created successfully", "success");
            navigate("/")
        })
        .catch((err) => swal("Opps!", `${err}`, "error"))
    }

    const userLogin = (email: string, password: string, navigate: any) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            swal("Great!", "Logged in successfully", "success");
            navigate("/")
        })
        .catch((err) => swal("Opps!", `${err}`, "error"))
    }

    const logout = () => {
        signOut(auth)
        .then(() => {
            swal("Opps", "Yuo have loged out", "warning");
        })
    }
    const userInfo = {user, createUser, setUser, userLogin, logout};

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