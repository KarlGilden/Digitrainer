import React, { useState, useContext, useEffect} from 'react'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    updateProfile,
    onAuthStateChanged 
} from 'firebase/auth'
import { auth } from '../firebase/firebase-config'
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            console.log(user)
        })
    })
    

    const signup = async (email, password, handle) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                updateProfile(auth.currentUser, {
                    displayName: handle
                  })
            })
        }catch (error){
            console.log(error)
        }
    }

    const update = async (email, handle) => {
        updateProfile(auth.currentUser, {
            displayName: handle
          })
    }

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        }catch (error){
            console.log(error)
            return error
        }
     }

     const logout = async () => {
         await signOut(auth)
     }

     const value = {
        user,
        signup,
        login,
        logout
    }



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
