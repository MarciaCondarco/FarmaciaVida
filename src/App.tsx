import { BrowserRouter, Route,Routes } from "react-router-dom"
import Home from "./assets/pages/home/Home"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Produto from "./assets/pages/product/Produto"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/produto" element={<Produto />} />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
