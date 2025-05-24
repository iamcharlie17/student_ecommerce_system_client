import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StudentSidebar = () => {
  return (
    <aside className="w-full md:w-64 border-r p-6 space-y-4">
      <h2 className="text-xl font-semibold mb-6">Account</h2>
      <ul className="space-y-3 text-gray-700">
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            My ads
          </NavLink>
        </li>
        <li>
          <NavLink to="membership" className="hover:text-blue-600">
            My membership
          </NavLink>
        </li>
        <li>
          <NavLink to="saved" className="hover:text-blue-600">
            Saved searches
          </NavLink>
        </li>
        <li>
          <NavLink to="favorites" className="hover:text-blue-600">
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink to="settings" className="hover:text-blue-600">
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="phones" className="hover:text-blue-600">
            Phone Numbers
          </NavLink>
        </li>
      </ul>

      <div className="mt-6 border-t pt-4">
        <div className="flex items-center space-x-2 text-blue-700 font-medium">
          <FaBriefcase className="text-xl" />
          <span>Jobs</span>
        </div>
        <ul className="ml-6 mt-2 space-y-2 text-gray-700">
          <li>
            <NavLink to="job-profile" className="hover:text-blue-600">
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="database" className="hover:text-blue-600">
              Profile Database
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default StudentSidebar;
