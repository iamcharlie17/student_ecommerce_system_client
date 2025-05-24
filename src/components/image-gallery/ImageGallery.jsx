import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleThumbnails = 5;

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + visibleThumbnails < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="border shadow mb-4">
        <img src={selectedImage} alt="Selected" className="w-full h-[500px] object-cover" />
      </div>

      <div className="flex items-center justify-center gap-2">
        <button onClick={handlePrev} disabled={startIndex === 0}>
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex gap-2 overflow-x-auto">
          {images.slice(startIndex, startIndex + visibleThumbnails).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`w-20 h-20 object-cover border-2 rounded cursor-pointer ${
                selectedImage === img ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <button onClick={handleNext} disabled={startIndex + visibleThumbnails >= images.length}>
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
