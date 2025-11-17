import { Link } from "react-router-dom"
import ListaPromocao from "../../../components/promocao/listapromocao/ListaPromocao"

function ProdutoPage() {
    return (
        <>
            {/* div com categoria */}
            <div className="flex p-6 gap-30 justify-center bg-gray-200 ">
                {/* barra de categoria - ira se transformar em componente */}
                <div>Beleza</div>
                <div>Higiene</div>
                <div>Medicamento</div>
                <div>Saude</div>
                <div>Mamãe e bebê</div>  
            </div>
            {/* a ficha do produto */}
            <div className="flex justify-center gap-90 my-9">
                {/* foto do produto */}
                <div className="w-60 px-9 bg-gray-200 py-9">
                    <img src="https://i.imgur.com/MqfsAIk.png" alt="foto do produto" className="w-50"/>
                </div>
                {/* informações do produto */}
                <div className="flex-col justify-center">
                    <div>
                        <h2 className="text-3xl">Dipirona MedCall 50gr</h2>
                    </div>
                    <div className="my-6 font-bold text-2xl">
                        <p>R$60.00</p>
                    </div>
                    <div>
                        <p>QUANTIDADE</p>
                    </div>
                    <div className="flex gap-30 my-6">
                        {/* botão de quantidade */}
                        <div className="flex justify-center items-center border-2 w-16 gap-2">
                            <a href="#">-</a>
                            <p>1</p>
                            <a href="#">+</a>
                        </div>
                        <a href="#" className="flex justify-center p-2 bg-gray-200">ADICIONAR CARRINHO</a>
                    </div>
                    <div className="flex justify-center bg-gray-200 p-2">
                        <Link to="/Finalizacao">Comprar
                        </Link>
                    </div>
                </div>
            </div>

            {/* div descrição */}
            <div className="p-9">
                <div className="bg-gray-200 p-7 rounded-2xl">
                    <h2 className="font-bold text-2xl">Descrição</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
                <ListaPromocao />
                <ListaPromocao />
        </>
    ) 
}

export default ProdutoPage