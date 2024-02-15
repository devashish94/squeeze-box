import { createPortal } from "react-dom";
import { Slider } from "./components/ui/slider";
import { useEffect, useState } from "react";

export default function CompressionModal({ selectedImages }) {
  return createPortal(
    <div
      className={`fixed bottom-0 sm:bottom-4 sm:right-4 border-black ${Object.keys(selectedImages).length === 0 ? "sm:rounded-xl shadow-lg shadow-black/30 z-50" : " -z-10 shadow-none"} duration-[200ms] ease-in-out transform-gpu`}
    >
      <div
        className={`w-full sm:w-80 ${Object.keys(selectedImages).length === 0 ? "translate-y-0 z-50" : "translate-y-full -z-50"} px-5 py-5 gap-4 border flex flex-col bg-white sm:rounded-xl shadow-xl transition-all duration-[200ms] ease-in-out transform-gpu`}
      >
        <div className={`flex gap-2 items-center`}>
          <input type="number" className={`w-full border outline-none`} />
        </div>
        <button
          className={`py-2 w-full bg-blue-500 rounded text-white text-base`}
        >
          Shrink
        </button>
      </div>
    </div>,
    document.getElementById("modal"),
  );
}
