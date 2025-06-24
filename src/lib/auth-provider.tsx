import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { orgAuth } from "./auth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 🔹 Prevents app from rendering too soon

  useEffect(() => {
    // const app = getApp(); // Ensure Firebase app is initialized

    setPersistence(orgAuth, browserLocalPersistence).then(() => {
      const unsubscribe = onAuthStateChanged(orgAuth, (user) => {
        setUser(user);
        setLoading(false); // ✅ Firebase finished checking
      });

      return () => unsubscribe();
    });
  }, []);

  if (loading) return null; // ⏳ Delay rendering until auth state is ready

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
