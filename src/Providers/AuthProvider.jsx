import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider} from "firebase/auth";
import PropTypes from 'prop-types';
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }
    const googleSignin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignin = ()=>{
        return signInWithPopup(auth, githubProvider)
    }
    const profileUpdate = (name, photo)=>{
       return UpdateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleSignin,
        githubSignin,
        profileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children: PropTypes.node,
}
export default AuthProvider;