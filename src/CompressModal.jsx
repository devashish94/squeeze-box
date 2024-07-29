import { createPortal } from "react-dom";
import { memo, useState } from "react";
import UploadingModal from "@/UploadingModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function imageSize(size) {
  return size / 1000;
}

function CompressionModal({ images, selectedImages }) {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [upload, setUpload] = useState(false);
  const [target, setTarget] = useState(imageSize(images[images.length - 1]?.size));

  async function sendImages() {
    const url = `${import.meta.env.VITE_API}/api/image/upload`

    const formData = new FormData();
    for (let i = 0; i < images.length; ++i) {
      formData.append(`images`, images[i]);
    }

    formData.append("targetSize", target);

    const axiosConfig = {
      onUploadProgress(progressEvent) {
        setProgress(
          Math.trunc((progressEvent.loaded * 100) / progressEvent.total),
        );
      },
    };

    try {
      const { data: { data } } = await axios.post(url, formData, axiosConfig);
      console.log(data.clientId, data)
      sessionStorage.setItem("user_id", data.clientId);
      setUpload(false);
      setTimeout(() => navigate("/download"), 400);
    } catch (err) {
      console.log(err);
      setUpload(false);
    }

  }

  async function handleImageUpload() {
    setUpload(true);
    await sendImages();
  }

  return createPortal(
    <>
      <div
        className={`w-full sm:w-fit fixed bottom-0 sm:bottom-4 sm:right-4 border-black ${Object.keys(selectedImages).length === 0 ? "sm:rounded-xl shadow-md shadow-black/30 z-30" : " -z-10 shadow-none"} duration-[200ms] ease-in-out transform-gpu`}
      >
        <div className={`-z-50 overflow-hidden`}>
          <UploadingModal
            progress={progress}
            uploading={upload}
            setUploading={() => setUpload(!upload)}
          />
        </div>
        <div
          className={`w-full sm:w-96 justify-between ${Object.keys(selectedImages).length === 0 ? "z-20 opacity-100 translate-y-0" : "-z-20 opacity-0 translate-y-full"} px-5 py-5 gap-4 border flex flex-col bg-white sm:rounded-xl shadow duration-[200ms] transform-gpu`}
        >
          <p className={`flex items-center justify-center text-gray-700`}>
            Set your target size for the images
          </p>
          <div className={`flex flex-col gap-4`}>
            <div className={`flex gap-2 items-center`}>
              <input
                min={imageSize(images[0]?.size) / 2}
                max={imageSize(images[images.length - 1]?.size)}
                value={target}
                onChange={(e) => setTarget(Number(e.target.value))}
                type="number"
                className={`border w-4/12 rounded-md py-1 px-2 outline-none`}
              />
              KB
              <input
                min={imageSize(images[0]?.size) / 2}
                max={imageSize(images[images.length - 1]?.size)}
                value={target}
                onChange={(e) => setTarget(Number(e.target.value))}
                type="range"
                className={`flex-1 outline-none`}
              />
            </div>
            <button
              onClick={handleImageUpload}
              className={`py-2 w-full bg-blue-500 outline-none hover:bg-blue-600 active:bg-blue-700 active:scale-95 transition-all duration-200 shadow hover:shadow-md rounded-md text-white`}
            >
              Shrink Images
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal"),
  );
}

export default memo(CompressionModal);
