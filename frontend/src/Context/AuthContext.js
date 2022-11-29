import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const AuthContext = React.createContext();

export default function AuthContextProvider ({children}) {
    const router = useRouter()
    const [token, setToken] = useState(() => {
        if (typeof window != "undefined") {
          const token = localStorage.getItem("luncheroToken");
          if (token != undefined && token != "none") {
            console.log("Read token from localStorage");
            return token;
          } else {
            console.log("No token found in localStorage");
            return "none";
          }
        }
      });
      useEffect(() => {
        const fetchUser = async () => {
          if (typeof window != "undefined") {
            const token = localStorage.getItem("luncheroToken");
    
            if (token == "none" || token == undefined) {
              console.log("No token found in localStorage");
              if (
                router.pathname == "/client" ||
                router.pathname == "/register"
              ) {
                router.push("/");
              }
            } else {
              console.log("Token found in localStorage");
            }
          }
        };
        fetchUser();
      }, [token]);
    
      return (
        <AuthContext.Provider value={[token, setToken]}>
          {children}
        </AuthContext.Provider>
      );
}
