import React from "react";
import {FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StudentSidebar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600";

  const navSections = [
    {
      title: "Account",
      links: [
        { to: "my-ads", label: "My ads" },
        { to: "membership", label: "My membership" },
        { to: "saved", label: "Saved searches" },
        { to: "favorites", label: "Favorites" },
        { to: "settings", label: "Settings" },
        { to: "phones", label: "Phone Numbers" },
      ],
    },
    {
      title: "Information",
      icon: <FaUser className="text-xl" />,
      links: [
        { to: "job-profile", label: "My Profile" },
        { to: "database", label: "Profile Database" },
      ],
    },
  ];

  return (
    <aside className="w-full md:w-64 border-r p-6 space-y-6">
      {navSections.map((section, idx) => (
        <div key={idx}>
          <div className="flex items-center space-x-2 text-blue-700 font-medium mb-4">
            {section.icon && section.icon}
            <h2 className="text-xl font-semibold text-gray-800">
              {section.title}
            </h2>
          </div>
          <ul
            className={`space-y-3 text-gray-700 ${
              section.title === "Information" ? "ml-6 mt-2" : ""
            }`}
          >
            {section.links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={navLinkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default StudentSidebar;
