/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  return <div>{children}</div>;
};

export default AuthProvider;
