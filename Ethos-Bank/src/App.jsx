import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Calculator_GST from "./Pages/Calculator_GST"
import Calculator_ROI from "./Pages/Calculator_ROI"
import { Route,Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator/gst" element={<Calculator_GST />} />
        <Route path="/calculator/roi" element={<Calculator_ROI />} />
      </Routes>
      {/* <Home /> */}
      {/* <div className=" h-[100vh] w-[100vw] bg-slate-700"></div> */}
    </>
  )
}

export default App
