import { createContext, useState, useEffect } from "react";

const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;
const INITIAL_NAME = localStorage.getItem("name") || "";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);
  const [name, setName] = useState(INITIAL_NAME);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  // Function to handle API requests
  const fetchData = async (url, method = "GET", body = null) => {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem("refreshToken");

    if (!token) {
      setError("No token found");
      setLoading(false);
      return;
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        throw new Error("API Error: " + response.statusText);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName, fetchData, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
