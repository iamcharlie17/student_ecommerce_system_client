import {
  FaMobileAlt,
  FaCar,
  FaTshirt,
  FaBook,
  FaGraduationCap,
  FaDog,
  FaUserAlt,
  FaUserTie,
  FaLaptop,
  FaThLarge,
  FaCouch,
  FaFutbol,
} from "react-icons/fa";
import { MdDevices, MdSchool } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { Link } from "react-router-dom";

export const categories = [
  { id: 1, name: "mobile", icon: <FaMobileAlt /> },
  { id: 2, name: "electronics", icon: <MdDevices /> },
  { id: 3, name: "vehicle", icon: <FaCar /> },
  { id: 4, name: "pet", icon: <FaDog /> },
  { id: 5, name: "male_fashion", icon: <FaUserTie /> },
  { id: 6, name: "female_fashion", icon: <GiClothes /> },
  { id: 7, name: "education", icon: <FaGraduationCap /> },
  { id: 8, name: "tuition", icon: <MdSchool /> },
  { id: 9, name: "books", icon: <FaBook /> },
  { id: 10, name: "furniture", icon: <FaCouch /> },
  { id: 11, name: "sports", icon: <FaFutbol /> },
  { id: 12, name: "others", icon: <FaThLarge /> },
];

const Category = () => {
  return (
    <div className="bg-gray-100 px-32 text-black py-12">
      <h1 className="font-semibold text-xl mb-6">Browse items by category</h1>
      <div className="grid grid-cols-4 gap-12 ">
        {categories.map((c) => (
          <Link key={c.id} className="flex flex-col items-center gap-2 font-semibold text-xl">
            <div className="text-3xl">{c.icon}</div>
            <h1 className="capitalize">
              {c.name.replace(/_/g, " ")}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default Category;
