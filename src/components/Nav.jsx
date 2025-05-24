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
            ``
          ) : (
            <div className=" w-32">
              <Link to={"/login"}>
                {" "}
                <Button type="success">Login</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
