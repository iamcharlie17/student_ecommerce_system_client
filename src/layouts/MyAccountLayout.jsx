import { FaBriefcase } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import StudentSidebar from "../components/sidebar/StudentSidebar";

const MyAccountLayout = () => {
  const { user } = useAuth();
  const role = user?.role;

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white shadow rounded-lg flex flex-col md:flex-row min-h-[400px]">
          {/* Sidebar */}

          {role == "student" ? <StudentSidebar /> : <div>Admin sidebar</div>}
          {/* Main Content */}
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccountLayout;
