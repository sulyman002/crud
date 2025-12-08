import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const AppProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

  const store = {};

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
