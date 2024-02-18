import ImageGallery from "./ImageGallery.jsx";
import Navbar from "@/Navbar.jsx";

export default function PreviewPage({ images, setImages }) {
  return (
    <div className={`w-screen h-screen flex flex-col font-sans`}>
      <Navbar heading={`Preview your images`} setImages={setImages} />
      <ImageGallery images={images} setImages={setImages} />
    </div>
  );
}
