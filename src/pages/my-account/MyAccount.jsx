import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const MyAccount = () => {
    const {user} = useAuth();
    console.log(user);
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white shadow rounded-lg flex flex-col md:flex-row min-h-[400px]">
          {/* Sidebar */}
          <aside className="w-full md:w-64 border-r p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-6">Account</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer font-semibold">
                My ads
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                My membership
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Saved searches
              </li>
              <li className="hover:text-blue-600 cursor-pointer">Favorites</li>
              <li className="hover:text-blue-600 cursor-pointer">Settings</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Phone Numbers
              </li>
            </ul>

            <div className="mt-6 border-t pt-4">
              <div className="flex items-center space-x-2 text-blue-700 font-medium">
                <FaBriefcase className="text-xl" />
                <span>Jobs</span>
              </div>
              <ul className="ml-6 mt-2 space-y-2 text-gray-700">
                <li className="hover:text-blue-600 cursor-pointer">
                  My Profile
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                  Profile Database
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-lg font-semibold mb-2">Dear {user?.name},</h2>
            <div className="flex flex-col items-center mt-10">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
                alt="Box Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                You don't have any items yet.
              </h3>
              <p className="text-gray-600 mb-4">
                Click the Post an item now! button to post your item.
              </p>
              <Link to={"/post-item"}>
                <button className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded transition duration-200">
                  Post your item now!
                </button>
              </Link>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
