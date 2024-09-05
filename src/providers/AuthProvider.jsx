/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = (email, password) => {
    setLoading(true);
    return signOut();
  };

  return <div>{children}</div>;
};

export default AuthProvider;
