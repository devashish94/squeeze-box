import ImageHolder from "./ImageHolder.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectedImagesModal from "./SelectImagesModal.jsx";
import CompressionModal from "./CompressModal.jsx";

export default function ImageGallery({ images, setImages }) {
  const [selectedImages, setSelectedImages] = useState({});
  const navigate = useNavigate();

  useEffect(
    function () {
      console.log("images", images);
      if (images.length === 0) {
        navigate("/");
      }
    },
    [selectedImages, images],
  );

  function handleSelectImage(id) {
    setSelectedImages((prev) => {
      const store = { ...prev };
      if (selectedImages[id] !== undefined) {
        delete store[id];
      } else {
        store[id] = id;
      }
      return store;
    });
  }

  return (
    <>
      <SelectedImagesModal
        images={images}
        setImages={setImages}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
      />
      <CompressionModal selectedImages={selectedImages} />
      <div className="w-screen h-screen flex flex-col items-center overflow-auto gap-5 p-3 sm:p-10">
        <p className="font-bold text-3xl flex items-center">
          Preview your images
        </p>
        <div className="w-full gap-2 sm:gap-3 max-w-screen-xl grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
          {images && images.length > 0
            ? images.map(function (image, index) {
                return (
                  <div
                    key={index}
                    className={`group relative flex flex-col gap-0 outline-none border rounded ${selectedImages[index] === index ? "border-red-500 bg-red-50" : "hover:border-blue-500 bg-white"} duration-[400ms] transition-colors rounded-xl hover:cursor-pointer shadow hover:shadow-md`}
                  >
                    <button
                      onClick={() => handleSelectImage(index)}
                      // className={`z-10 outline-none transition-opacity duration-[100ms] opacity-0 p-2 absolute text-white w-full bg-gradient-to-b from-gray-600/70 ${selectedImages[index] === index ? "opacity-100" : "group-hover:opacity-100"} rounded-t-xl`}
                      className={`z-10 outline-none opacity-0 p-2 text-white w-full ${selectedImages[index] === index ? "opacity-100" : "group-hover:opacity-100"} rounded-t-xl`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-6 h-6 rounded-full p-0 border shadow ${selectedImages[index] === index ? "text-white bg-red-500" : "bg-gray-200 hover:bg-red-500 fill-black hover:fill-white"}`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div
                      className={`flex self-center flex-1 aspect-square rounded-xl ${selectedImages[index] === index ? "" : ""}`}
                    >
                      <ImageHolder
                        selected={selectedImages[index] === index}
                        image={image}
                      />
                    </div>

                    <div className="w-full p-2 gap-2 flex items-center">
                      <p className="flex-1 line-clamp-1 overflow-ellipsis text-sm">
                        {image.name}
                      </p>
                      <p className="whitespace-nowrap font-bold text-sm">
                        {(image.size / 1000).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                );
              })
            : "No image selected"}
        </div>
      </div>
    </>
  );
}
