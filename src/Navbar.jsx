import Left from "@/Logos/Left.jsx";

export default function Navbar({ heading, setImages }) {
  function handleGoBack() {
    setImages([]);
  }

  return (
    <div className={`w-full px-4 py-3 border-b flex gap-4 z-0 bg-white shadow`}>
      <button
        onClick={handleGoBack}
        className={`w-fit h-fit p-2 rounded-full hover:bg-gray-200 active:bg-gray-300 transition-colors outline-none`}
      >
        <Left className={`w-5 h-5 text-gray-500`} />
      </button>
      <p className={`flex items-center text-gray-600 text-lg`}>{heading}</p>
    </div>
  );
}
