import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Button from "./Button";
import { FaRegUser } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";

const Nav = () => {
  const { user } = useAuth();
  return (
    <div className="bg-blue-900 flex justify-between items-center">
      <div className="flex-1">
        <div className="flex gap-16 items-center">
          <Link to={"/"}>
            <h1 className="text-2xl">CampusCart</h1>
          </Link>
          <Link to={"/all-items"}>
            <h1 className="uppercase">all Listings</h1>
          </Link>
        </div>
      </div>
      <div className="flex gap-16 items-center">
        <Link className="flex gap-2 items-center">
          <IoChatbubblesOutline />
          <h1>Chat</h1>
        </Link>
        <Link className="flex gap-2 items-center">
          {user ? (
            <>
              <FaRegUser />
              <Link to={"/account"}>Account</Link>
            </>
          ) : (
            <>
              <FaRegUser />
              <Link to={"/login"}>Login</Link>
            </>
          )}
        </Link>
        <Link to={"/post-item"} className="w-32">
          <Button type="primary">post item</Button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
