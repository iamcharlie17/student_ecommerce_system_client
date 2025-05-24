import axios from "axios";
import { useEffect, useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeaturedItem = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axios.get("/featured_items.json");
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="bg-white text-black px-32 p-8">
      <div>
        <h1 className="font-semibold text-xl">Featured Items</h1>
      </div>

      <div className="p-8">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-100 rounded-xl shadow-lg p-6">
                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4 md:w-1/2">
                  {item.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="w-full h-32 overflow-hidden rounded-md shadow"
                    >
                      <img
                        src={img}
                        alt={`image-${idx}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

                {/* Item Details */}
                <div className="md:w-1/2 space-y-2 text-left">
                  <h1 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h1>
                  <h2 className="text-gray-600">{item.location}</h2>
                  <h3 className="text-lg font-bold text-green-600">
                    Tk {item.price}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedItem;
