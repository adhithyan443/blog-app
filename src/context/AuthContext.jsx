import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import {
    login as loginService,
    logout as logoutService,
    register as registerService
} from "../services/authService";


export const AuthContext = createContext();


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (currentuser) => {
                setUser(currentuser);
                setLoading(false)
            }
        );

        return () => {
            unsubscribe();
        };
    }, []);

    const register = (email, password) => {
        return registerService(email, password);
    };

    const login = (email, password) => {
        return loginService(email, password);
    };

    const logout = () => {
        return logoutService();
    };

    const value = {
        user,
        loading,
        register,
        login,
        logout,
    };


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}