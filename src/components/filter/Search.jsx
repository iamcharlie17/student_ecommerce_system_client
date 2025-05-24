import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full bg-white p-2 rounded-full border"
        placeholder="What r u looking for?"
      />
    </div>
  );
};

export default Search;
