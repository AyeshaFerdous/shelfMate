
import { createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import axios from 'axios';



export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
     
    const [email, setEmail] = useState("")
    
    

    
    const createNewUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const logOut =()=>{
        setLoading(false)
       return signOut(auth);
    }
    
    
 
    const updateUserProfile = (updatedData)=>{
       
        return updateProfile(auth.currentUser, updatedData);
    }
    const userLogin = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('state change', currentUser?.email)
            if (currentUser?.email) {
                const user = { email: currentUser?.email };
                axios
                  .post(`${import.meta.env.VITE_URL}/jwt`, user, {
                    withCredentials: true,
                  })
                  .then((res) => {
                    setLoading(false);
                    console.log(res.data);
                  });
              } else {
                axios
                  .post(
                    `${import.meta.env.VITE_URL}/logout`,
                    {},
                    { withCredentials: true }
                  )
                  .then((res) => {
                    setLoading(false);
                    console.log(res.data);
                  });
              }
            });
            
      
          return ()=>{
              unsubscribe();
          }
      },[]);

     
    const authInfo = {
        userLogin,
        createNewUser,
        setUser,
        user,
        logOut,
        loading,
        setLoading,
        updateUserProfile,
        email,
        setEmail
       
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;