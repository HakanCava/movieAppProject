import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

export const AuthContext = createContext(); //!create edildi

const AuthContextProvider = ({ children }) => {
  //!provider oluşturuldu
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );
  const navigate = useNavigate();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName, photoURL) => {
    console.log(email);
    console.log(password);
    console.log(displayName);
    console.log(photoURL);
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        displayName,
        photoURL
      );
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });

      setCurrentUser({ email, displayName, photoURL });
      sessionStorage.setItem(
        "user",
        JSON.stringify({ email, displayName, photoURL })
      );

      navigate("/");
      toastSuccessNotify("Registered Successfully");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const signIn = async (email, password) => {
    console.log(email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth);
      navigate("/");
      toastSuccessNotify("Login Successfully");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const logout = () => {
    try {
      signOut(auth);
      navigate("/login")
      toastSuccessNotify("Logout Successfully");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user);
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        setCurrentUser(false);
        sessionStorage.clear();
      }
    });
  };

  const signUpProvider = () => {
    //!google ile giris
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/");
        toastSuccessNotify("Logged in Successfuly");
      })
      .catch((error) => toastErrorNotify(error));
  };

  const values = { currentUser, createUser, signIn, logout,signUpProvider };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext); //!consume edildi

export default AuthContextProvider; //!provider export edildi
