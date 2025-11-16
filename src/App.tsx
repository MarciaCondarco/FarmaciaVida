import { BrowserRouter, Route,Routes } from "react-router-dom"
import Home from "./assets/pages/home/Home"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Produto from "./assets/pages/product/Produto"
import Categoria from "./assets/pages/categoria/Categoria"
import Historico from "./assets/pages/historico/Historico"
import Carrinho from "./assets/pages/carrinho/Carrinho"
import Finalizacao from "./assets/pages/finalizacao/Finalizacao"
import ListaPromocao from "./components/promocao/listapromocao/ListaPromocao"
import ListaHistorico from "./components/historico/listahistorico/ListaHistorico"



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
              <Route path="/categoria" element={<Categoria />} />
              <Route path="/historico" element={<Historico />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/finalizacao" element={<Finalizacao />} />
              <Route path="/promocao" element={<ListaPromocao />} />
              <Route path="/listahistorico" element={<ListaHistorico />} />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
