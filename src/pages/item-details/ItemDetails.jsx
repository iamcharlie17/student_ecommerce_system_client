import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import useProduct from "../../hooks/useProduct";
import { useState, useEffect } from "react";
import ImageGallery from "../../components/image-gallery/ImageGallery";
import LocationMap from "../../components/map/LocationMap";

const ItemDetails = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { items } = useProduct();

  useEffect(() => {
    if (items.length > 0) {
      const foundItem = items.find((i) => i.id == id);
      setItem(foundItem);
    }
  }, [id, items]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-blue-900 px-10 md:px-32 py-4 text-white">
        <Nav />
      </div>
      <div className="mx-32 bg-white flex justify-between p-8">
        <div className="text-xl space-y-4">
          <h1 className="font-semibold text-2xl">{item.title}</h1>
          <p>{item.created_at}</p>
          <ImageGallery images={item.images} />
          <p className="text-3xl font-semibold text-green-500">
            TK {item.price}
          </p>

          <h1>Address: {item.location.address}</h1>
          <div>
            <h1 className="font-semibold">Description</h1>
            <hr />
            <p>{item.description}</p>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-8">
          <div>
            <h1>Seller Info</h1>
            <h1>Chat</h1>
          </div>
          <div>
            <LocationMap lat={item.location.lat} lon={item.location.lon} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetails;
