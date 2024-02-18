import { createPortal } from "react-dom";
import { memo } from "react";

function SelectedImagesModal({
  selectedImages,
  setSelectedImages,
  setImages,
  images,
}) {
  function handleDeleteSelectedImages() {
    const arr = images.filter(
      (image, index) => selectedImages[index] === undefined,
    );
    setImages(arr);
    setSelectedImages({});
  }

  return createPortal(
    <div
      className={`w-full sm:w-fit fixed bottom-0 sm:bottom-4 sm:left-4 overflow-hidden border-black ${Object.keys(selectedImages).length > 0 ? "sm:rounded-xl shadow-md shadow-black/30 z-50" : "-z-10 shadow-none"} duration-[200ms] ease-in-out transform-gpu`}
    >
      <div
        className={`text-sm h-full ${Object.keys(selectedImages).length > 0 ? "translate-y-0 z-50 opacity-100" : "translate-y-full -z-50 opacity-0"} px-5 py-5 gap-4 border flex flex-col bg-white sm:rounded-xl shadow-xl transition-all duration-[200ms] ease-in-out transform-gpu`}
      >
        <p className="text-black">
          Are you sure you want to remove{" "}
          <b>{Object.keys(selectedImages).length}</b> images from shrinking?
        </p>
        <div className="w-full flex justify-between text-sm">
          <button
            onClick={() => setSelectedImages({})}
            className="text-red-800 hover:text-red-900 bg-red-50 hover:bg-red-100 rounded px-3 py-2 active:scale-95 transition-transform duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteSelectedImages}
            className="font-bold px-4 py-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white rounded transition-transform duration-200 shadow flex gap-2 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal"),
  );
}

export default memo(SelectedImagesModal);
