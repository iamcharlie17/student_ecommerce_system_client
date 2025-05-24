import Search from "./Search";
import { categories } from "../../components/Category"; // Adjust path if needed
import Price from "./Price";
import FitlterByCategory from "./FitlterByCategory";
import FilterByLocation from "./FilterByLocation";
import FilterByCondition from "./FilerByCondition";

const Filter = () => {
  return (
    <div className="w-64 space-y-8">
      <Search />
      <Price />
      <FilterByLocation />
      <FilterByLocation />
      <div className="flex">
        <FitlterByCategory categories={categories} />
        <FilterByCondition />
      </div>
    </div>
  );
};

export default Filter;
