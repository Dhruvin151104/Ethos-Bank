import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Calculator_GST from "./Pages/Calculator_GST";
import Calculator_ROI from "./Pages/Calculator_ROI";
import Calculator_CAGR from "./Pages/Calculator_CAGR";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ContactUS from "./Pages/ContactUS";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="bg-main-theme">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/calculator/gst" element={<Calculator_GST />} />
        <Route path="/calculator/roi" element={<Calculator_ROI />} />
        <Route path="/calculator/cagr" element={<Calculator_CAGR />} />
        <Route path="/support" element={<ContactUS />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
