import Button from "./Button";
import studentEcommerce from "../assets/images/student_ecommerce.jpg";

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
            <Button>Login</Button>
            <Button type="success">Registraion</Button>
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
