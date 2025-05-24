import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import student from "../../assets/images/student.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center text-black">
      <div className="flex min-h-[90vh] bg-white  mx-8 w-full max-w-6xl">
        <div className="flex-1">
          <div className="h-full w-full">
            <img
              className="h-full w-full object-cover"
              src={student}
              alt="Login visual"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-700">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                id="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 px-4 py-2 rounded text-black"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-gray-700">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="****************"
                className="w-full border border-gray-300 px-4 py-2 rounded text-black"
              />
            </div>

            <div>
              <Button type="success">Login</Button>
            </div>
          </form>

          <div className="flex justify-center my-4">
            <button className="flex items-center gap-3 bg-white border border-gray-300 hover:border-black text-gray-700 py-1 px-6 rounded-md shadow-sm font-medium text-base transition-all duration-500 hover:py-2 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
              <FcGoogle size={24} />
              <span>Sign in with Google</span>
            </button>
          </div>

          <div>
            Do not have an account?{" "}
            <Link to={"/register"}>
              <span className="font-bold hover:cursor-pointer">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
