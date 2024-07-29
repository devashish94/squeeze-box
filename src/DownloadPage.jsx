import axios from "axios";
import { useEffect } from "react";

export default function DownloadPage() {
  async function downloadImages() {
    const clientID = sessionStorage.getItem("user_id");
    const response = await axios.get(`${import.meta.env.VITE_API}/api/image/download/${clientID}`, { responseType: "arraybuffer" });

    const blob = new Blob([response.data], { type: "application/zip" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "shrunk-images.zip";
    link.click();
  }

  return (
    <div className={`w-screen h-screen flex flex-col`}>
      <div
        className={`shadow px-5 text-lg py-3 border-b flex items-center text-gray-800`}
      >
        <p>Download Page</p>
      </div>
      <div className={`py-10 px-4 flex-1 flex-col flex`}>
        <p className={`text-xl self-center mb-14 font-bold`}>
          Your images are going to start downloading now.
        </p>
        <p className={`self-center mb-4 text-gray-700`}>
          Did not start automatically? Click on the button below to download
          now.
        </p>
        <button
          onClick={downloadImages}
          className={`self-center outline-none w-fit rounded-lg px-6 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-[97%] transition-all duration-[150ms] text-lg text-white`}
        >
          Download
        </button>
      </div>
    </div>
  );
}
