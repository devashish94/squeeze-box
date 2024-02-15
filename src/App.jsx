import { useState } from "react"
import { Route, Router, Routes, useNavigate } from "react-router-dom"
import PreviewPage from "./PreviewPage"
import HomePage from "./HomePage"

export default function App() {
  const [images, setImages] = useState([])

  return (
    <Routes>
      <Route path="/" exact element={<HomePage images={images} setImages={setImages} />} />
      <Route path="/preview" element={<PreviewPage images={images} setImages={setImages} />} />
    </Routes>
  )
}
