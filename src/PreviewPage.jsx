import ImageGallery from "./ImageGallery.jsx";

export default function PreviewPage({ images, setImages }) {
  return (
    <>
      <ImageGallery images={images} setImages={setImages} />
    </>
  );
}
