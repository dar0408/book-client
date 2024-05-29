// import React from 'react';
// import { createContext } from 'react';
// import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
// import app from '../firebase/firebase.config';
// import { useState } from 'react';
// import { useEffect } from 'react';

// export const AuthContext = createContext();
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const signUpWithGmail = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }

//     const login = (email, password) =>{
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }

//     const logOut = () =>{
//         localStorage.removeItem('genius-token');
//         return signOut(auth);
//     }

//     useEffect( () =>{
//         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
//             console.log(currentUser);
//             setUser(currentUser);
//             setLoading(false);
//         });

//         return () =>{
//             return unsubscribe();
//         }
//     }, [])

//     const authInfo = {
//         user, 
//         loading,
//         createUser, 
//         login, 
//         logOut,
//         signUpWithGmail
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

// src/contexts/AuthProvider.js
import React, { createContext, useContext } from 'react';
import { auth, googleProvider } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const signUpWithGmail = () => signInWithPopup(auth, googleProvider);

  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  return (
    <AuthContext.Provider value={{ signUpWithGmail, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};
