import Button from "./Button";
import studentEcommerce from "../assets/images/student_ecommerce.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-[70vh] bg-[#5F6462] flex justify-between px-28 items-center">
      <div className="flex-1 w-full">
        <div className="w-xl space-y-8">
          <h1 className="text-7xl font-bold">Smart Shopping for Students</h1>
          <p className="text-xl">
            A student-focused e-commerce platform tailored for university life —
            buy, sell, and trade books, gadgets, and essentials easily within
            the campus community.
          </p>
          <div className="flex justify-between gap-4 pr-32">
            <Link className="w-full">
              <Button>Explore</Button>
            </Link>
            <Link to={"/register"} className="w-full">
              <Button type="success">Registraion</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-2/5 shadow-2xl">
        <img src={studentEcommerce} alt="" />
      </div>
    </div>
  );
};

export default Hero;
