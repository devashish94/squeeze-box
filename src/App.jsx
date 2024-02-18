import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PreviewPage from "./PreviewPage";
import HomePage from "./HomePage";
import DownloadPage from "@/DownloadPage.jsx";

export default function App() {
  const [images, setImages] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={<HomePage images={images} setImages={setImages} />}
      />
      <Route
        path="/preview"
        element={<PreviewPage images={images} setImages={setImages} />}
      />
      <Route path="/download" element={<DownloadPage />} />
    </Routes>
  );
}
