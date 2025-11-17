import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init.';
import { CgPassword } from 'react-icons/cg';

const AuthProvider = ({ children }) => {

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    registerUser,
    signInUser
  }
  
  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;