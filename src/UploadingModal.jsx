import { createPortal } from "react-dom";
import Spinner from "@/Logos/Spinner.jsx";
import { memo } from "react";

function UploadingModal({ uploading, setUploading, progress }) {
  return createPortal(
    <div
      className={`p-7 aspect-square top-0 left-0 w-screen h-screen flex flex-col items-center justify-center rounded fixed ${uploading ? "z-50 opacity-100" : "-z-10 opacity-0"} duration-[300ms]`}
    >
      <div
        onClick={setUploading}
        className={`w-full h-full bg-black/30 absolute top-0 left-0 z-40 duration-[300ms] ${uploading ? "opacity-100" : "opacity-0"}`}
      ></div>
      <div
        className={`w-full sm:w-fit py-8 sm:px-32 flex flex-col gap-6 rounded-lg z-50 shadow-xl bg-white border duration-300 ${uploading ? "z-50 opacity-100 translate-y-0" : "-z-50 opacity-0 translate-y-20"}`}
      >
        <div className={`flex flex-col justify-center items-center gap-2`}>
          <Spinner className={`animate-spin fill-blue-500 w-9 h-9`} />
          {progress < 100 && <p className={`text-center`}>{progress}%</p>}
        </div>
        {progress < 100 && <p className={`text-center`}>Uploading</p>}
        {progress === 100 && <p className={`text-center`}>Processing</p>}
      </div>
    </div>,
    document.body,
  );
}

export default memo(UploadingModal);
