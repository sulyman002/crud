import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { getItem } from "../utils/localStorage";

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
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(user);

      await updateProfile(user, {
        displayName: firstName,
      });

      const userDocData = {
        firstName,
        lastName,
        email,
        createdAt: serverTimestamp(),
      };

      if (industry) userDocData.industry = industry;
      if (country) userDocData.country = country;

      await setDoc(doc(db, "users", user.uid), userDocData);

      await signOut(auth);

      return {
        message:
          "Signup successful! Please verify your email before logging in.",
      };
    } catch (error) {
      console.error("Signup error:", error);

      if (error.code === "auth/email-already-in-use") {
        try {
          // Attempt sign-in to check verification status
          const existingUser = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          if (!existingUser.user.emailVerified) {
            await sendEmailVerification(existingUser.user);
            throw new Error(
              "Email already registered but not verified. Verification link resent!"
            );
          } else {
            throw new Error("Email is already registered and verified.");
          }
        } catch (signInError) {
          // Catch wrong password or other sign-in issues
          if (signInError.code === "auth/wrong-password") {
            throw new Error(
              "Email already registered. Please use your password to log in."
            );
          }
          throw signInError;
        }
      } else if (error.code === "auth/invalid-email") {
        throw new Error("Invalid email address.");
      } else if (error.code === "auth/weak-password") {
        throw new Error("Password is too weak.");
      } else {
        throw new Error(error.message || "Signup failed.");
      }
    }
  };

  const navigateAfterLogin = () => {
    const lastPage = getItem("lastPage") || "/dashboard";
    navigate(lastPage, { replace: true });
  };

  const signInLogic = async ({ email, password }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (!user.emailVerified) {
        await signOut(auth);
        toast.error("Please verify your email before logging in.");
        return false;
      }

      if (user) navigateAfterLogin();
      return user;
    } catch (error) {
      let message = error.message;
      if (error.code === "auth/wrong-password") message = "Incorrect password.";
      else if (error.code === "auth/user-not-found")
        message = "No account found with this email.";
      toast.error(message);
      return false;
    }
  };

  const store = { user, loading, signUpLogic, signInLogic };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
