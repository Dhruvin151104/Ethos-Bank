import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Calculator_GST from "./Pages/Calculator_GST"
import { Route,Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator_GST />} />
      </Routes>
      {/* <Home /> */}
      {/* <div className=" h-[100vh] w-[100vw] bg-slate-700"></div> */}
    </>
  )
}

export default App
