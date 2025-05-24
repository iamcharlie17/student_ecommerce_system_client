import { createContext, useEffect, useState } from "react";
import { axiosPublic } from "../hooks/useAxiosPublic";
import axios from "axios";
import toast from "react-hot-toast";
import { axiosPrivate } from "../hooks/useAxiosPrivate";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const register = async (fullName, email, password, navigate) => {
    try {
      setLoading(true);
      const response = await axiosPublic.post("api/auth/register", {
        fullName,
        email,
        password,
      });
      if (response.data) {
        toast.success(response?.data?.message);
        localStorage.setItem("token", response?.data?.accessToken);
        setUser(response?.data?.user);
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error?.response?.data?.message ||
            "An error occurred while registering"
        );
      } else {
        toast.error("An unexpected error occurred.");
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }

  };
  const login = async (email, password, navigate) => {
    try {
      setLoading(true);
      const response = await axiosPublic.post("api/auth/login", {
        email,
        password,
      });
      if (response.data) {
        toast.success(response?.data?.message);
        localStorage.setItem("token", response.data?.accessToken);
        setUser(response.data?.user);
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "An error occurred while logging in."
        );
      } else {
        toast.error("An unexpected error occurred.");
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {};

  const getUser = async () => {
    try {
      const response = await axiosPrivate.get("api/auth/user");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <AuthContext.Provider value={{user, loading, register, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
