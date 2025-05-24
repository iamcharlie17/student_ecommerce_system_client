import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Button from "./Button";

const Nav = () => {
  const { user } = useAuth();
  return (
    <nav className={`w-full bg-[#5F6462]`}>
      <div className="flex justify-between items-center mx-8">
        <div>
          <h1 className="font-bold text-3xl">CampusCart</h1>
        </div>
        <div>
          {user ? (
            <div className="flex gap-4 items-center">
              <Link to={"/dashboard"}>
                <h1 className="uppercase font-semibold">Dashboard</h1>
              </Link>
              <div className="w-32">
                <Button type="danger">Logout</Button>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <div className="flex gap-4 uppercase font-semibold">
                <Link>
                  <h1>Products</h1>
                </Link>
                <Link>
                  <h1>Services</h1>
                </Link>
              </div>
              <div className=" w-32">
                <Link to={"/login"}>
                  {" "}
                  <Button type="success">Login</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
