import { Link } from "react-router-dom";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Button from "./Button";
import { FaSearch } from "react-icons/fa";
import Nav from "./Nav";

const Header = () => {

  return (
    <div className="h-[30vh] bg-blue-900 px-32 py-4 relative text-white">
      <Nav/>

      <div className="flex justify-center mt-12">
        <div className="w-2/3 relative">
          <input
            type="text"
            name=""
            id=""
            className="bg-white text-gray-400 w-full p-6 rounded-full"
            placeholder="What are you looking for?"
          />
          <button className="bg-yellow-500 p-4 rounded-full absolute right-2 top-2">
            <FaSearch size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
