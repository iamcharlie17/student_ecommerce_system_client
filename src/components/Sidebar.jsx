import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const studentLinks = [
  { id: 1, title: "Dashboard", url: "/dashboard" },
  { id: 2, title: "My Services", url: "/dashboard/services" },
  { id: 3, title: "My Products", url: "/dashboard/products" },
];

const adminLinks = [
  { id: 1, title: "Dashboard", url: "/dashboard" },
  { id: 2, title: "Users", url: "/dashboard/users" },
  { id: 3, title: "Products", url: "/dashboard/products" },
  { id: 4, title: "Services", url: "/dashboard/services" },
];

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const isAdmin = user?.isAdmin;

  const linksToRender = isAdmin ? adminLinks : studentLinks;

  return (
    <aside className="w-64 min-h-screen bg-[#5F6462] text-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
      <ul className="space-y-4">
        {linksToRender.map((link) => {
          const isActive = location.pathname === link.url;
          return (
            <li key={link.id}>
              <Link
                to={link.url}
                className={`block px-4 py-2 rounded transition-all duration-300 font-medium ${
                  isActive
                    ? "bg-white text-[#5F6462]"
                    : "hover:bg-[#7C8C86] hover:text-white"
                }`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
