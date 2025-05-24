import { createContext, useEffect, useState } from "react";
import { axiosPublic } from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { axiosPrivate } from "../hooks/useAxiosPrivate";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    name: "Charlie",
    email: "charlie@gmail.com"
  });
  const [loading, setLoading] = useState(false);

  const register = async (fullName, email, password, navigate) => {
    try {
      setLoading(true);
      const response = await axiosPublic.post("user_auth/register/", {
        user: {
          email: email,
          password: password,
        },
        name: fullName,
        role: "student",
      });
      if (response.data) {
        toast.success("Registration Success!!!");
        localStorage.setItem("token", response?.data?.token);
        setUser(response?.data?.user);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const login = async (email, password, navigate) => {
    try {
      setLoading(true);
      const response = await axiosPublic.post("user_auth/login/", {
        email,
        password,
      });
      if (response.data) {
        toast.success("Login Success!!");
        localStorage.setItem("token", response.data?.token);
        setUser(response.data?.user);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {};

  const getUser = async () => {
    try {
      const response = await axiosPrivate.get("get_user/");
      console.log(response);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
