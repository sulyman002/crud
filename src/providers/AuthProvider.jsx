import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUpLogic = async ({
    firstName,
    lastName,
    email,
    password,
    industry,
    country,
  }) => {
    try {
      const userSignUpData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userSignUpData.user;
      await sendEmailVerification(user);

      await updateProfile(user, {
        displayName: firstName,
        photoURL: null,
      });

      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        industry,
        country,
        createdAt: new Date().toISOString(),
      });

      return user;
    } catch (error) {
      console.error("Signup error:", error.code, error.message);
      toast.error(error.message)
      throw error;
    }
  };

  const navigateAfterLogin = () => {
    const lastPage = localStorage.getItem("lastPage") || "/dashboard";
    navigate(lastPage, { replace: true });
  };

  const signInLogic = async ({ email, password }) => {
    try {
      const userSingInData = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setTimeout(() => navigateAfterLogin(), 0);
      return userSingInData.user;
    } catch (error) {
      console.error("Login error:", error.message);
      throw error;
    }
  };

  const store = { user, loading, signUpLogic, signInLogic };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
