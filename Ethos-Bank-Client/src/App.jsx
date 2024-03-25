import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Calculator_GST from "./Pages/Calculator_GST";
import Calculator_ROI from "./Pages/Calculator_ROI";
import Calculator_CAGR from "./Pages/Calculator_CAGR";
import Customer from "./Pages/Customer";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ContactUS from "./Pages/ContactUS";
import Login from "./Pages/Login";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation()
  const isLoginPage = location.pathname !== '/login';
  
  return (
    <div className="bg-main-theme">
      {isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/calculator/gst" element={<Calculator_GST />} />
        <Route path="/calculator/roi" element={<Calculator_ROI />} />
        <Route path="/calculator/cagr" element={<Calculator_CAGR />} />
        <Route path="/support" element={<ContactUS />} />
        <Route path="/customer/:name" element={<Customer />} />
      </Routes>
      {isLoginPage && <Footer />}
    </div>
  );
}

export default App;
