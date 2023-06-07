import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //registration
  const createUser = (email, password, name, imgurl) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        return updateProfile(newUser, {
          displayName: name,
          photoURL: imgurl,
        });
      })
      .catch((error) => {
        console.log("Error creating user", error);
      });
  };

  // ovserver
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    setLoading,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
