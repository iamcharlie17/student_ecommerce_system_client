import { Link } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import useProduct from "../../hooks/useProduct";
import SingleItem from "./SingleItem";

const AllItems = () => {
  const { items } = useProduct();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="bg-blue-900 px-10 md:px-32 py-4 text-white">
        <Nav />
      </div>

      {/* Main Container */}
      <div className="mx-4 md:mx-32 bg-white">
        <div className="flex gap-4 p-4">
          <Filter />

          {/* Item Grid */}
          <div className="flex-1">
            {items?.length === 0 ? (
              <p className="text-center text-gray-600">No items found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item) => (
                  <Link key={item.id} to={`/item/${item.id}`}>
                    <SingleItem item={item} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AllItems;
