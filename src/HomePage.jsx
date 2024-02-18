import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function HomePage({ setImages, images }) {
  const navigate = useNavigate();
  const inputRef = useRef();

  const supportedImageTypes = {
    "image/jpeg": true,
    "image/jpg": true,
    "image/png": true,
    "image/webp": true,
  };

  function handleImageUpload(e) {
    const arr = Array.from(e.target.files).filter(
      (file) => supportedImageTypes[file.type],
    );
    arr.sort((a, b) => a.size - b.size);
    setImages(arr);
  }

  useEffect(() => {
    if (images.length > 0) {
      navigate("/preview");
    }
  }, [images]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center font-sans">
      <div className="flex flex-col items-center gap-3">
        <p className="font-bold text-5xl">
          Squeezebox: The Effortless Image Shrinkage Tool
        </p>
        <p className="text-zinc-500 text-2xl font-bold">
          Size It Up. Squeezebox Makes It Small.
        </p>

        <input
          ref={inputRef}
          onChange={handleImageUpload}
          id="images-select"
          type="file"
          name="images"
          className={`hidden`}
          multiple={true}
        />
        <button
          onClick={() => inputRef.current?.click()}
          className={`px-4 py-3 rounded-md bg-blue-500 text-white font-semibold`}
        >
          Browse Images
        </button>
      </div>
    </div>
  );
}
