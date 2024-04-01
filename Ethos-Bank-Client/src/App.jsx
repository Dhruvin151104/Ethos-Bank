import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Calculator from "./Pages/Calculator";
import Calculator_GST from "./Pages/Calculator_GST";
import Calculator_ROI from "./Pages/Calculator_ROI";
import Calculator_CAGR from "./Pages/Calculator_CAGR";
import Customer from "./Pages/Customer";
import Loan from "./Pages/Loan";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ContactUS from "./Pages/ContactUS";
import Login from "./Pages/Login";
import { useLocation } from "react-router-dom";
import Payments from "./Pages/Payments";
import { useState ,useEffect} from "react";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname !== "/login";
  const [isLoggedIn, setisLoggedIn] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('userDetails')) setisLoggedIn(true);
    else setisLoggedIn(false)  
  }, [])
  
  

  return (
    <div className="bg-main-theme">
      {isLoginPage && <Navbar isLoggedIn={isLoggedIn}/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn}/>} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/calculator" element={<Calculator />}>
          <Route path="/calculator/gst" element={<Calculator_GST />} />
          <Route path="roi" element={<Calculator_ROI />} />
          <Route path="cagr" element={<Calculator_CAGR />} />
        </Route>
        <Route path="/support" element={<ContactUS />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
      {isLoginPage && <Footer />}
    </div>
  );
}

export default App;
