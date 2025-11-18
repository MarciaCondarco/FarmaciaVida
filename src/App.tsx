import { BrowserRouter, Route, Routes } from "react-router-dom"
import Carrinho from "./assets/pages/carrinho/Carrinho"
import Categoria from "./assets/pages/categoria/Categoria"
import Finalizacao from "./assets/pages/finalizacao/Finalizacao"
import Historico from "./assets/pages/historico/Historico"
import Home from "./assets/pages/home/Home"
import ProdutoPage from "./assets/pages/product/ProdutoPage"
import Footer from "./components/footer/Footer"
import ListaHistorico from "./components/historico/listahistorico/ListaHistorico"
import Navbar from "./components/navbar/Navbar"
import ListaPromocao from "./components/promocao/listapromocao/ListaPromocao"
import Login from "./assets/pages/login/Login"
import Cadastro from "./assets/pages/cadastrar/Cadastro"




function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/produto" element={<ProdutoPage />} />
              <Route path="/categoria" element={<Categoria />} />
              <Route path="/historico" element={<Historico />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/finalizacao" element={<Finalizacao />} />
              <Route path="/promocao" element={<ListaPromocao />} />
              <Route path="/listahistorico" element={<ListaHistorico />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
