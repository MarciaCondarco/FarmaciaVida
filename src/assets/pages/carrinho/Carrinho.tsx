import { XIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"


function Carrinho() {
    return (
        <>
            {/* todos os produtos */}
            <div className="flex gap-9 p-30 justify-center">
                
                <div className="flex items-center">
                    <XIcon size={32} />
                </div>
                <div>
                    {/* foto */}
                    <div className="w-30 px-3 bg-gray-200 py-3">
                        <img src="https://i.imgur.com/MqfsAIk.png" alt="foto do produto" className="w-50"/>
                    </div>
                </div>
                                    {/* descrição do produto */}
                <div className="px-20">
                    <h2>Protetor Solar BTSKILL 50ml</h2>
                        <div className="my-6 font-bold text-2xl">
                            <p>R$60.00</p>
                        </div>
                </div>


                {/* soma dos produtos */}
                <div className="flex justify-center bg-gray-200 p-10">
                    <div>
                        <h2 className="flex justify-center font-bold">Comprar</h2>
                            <div className="flex gap-9">
                                <div className="">
                                    <p>Protetor solar</p>
                                    <p>TOTAL</p>
                                </div>
                                <div className="">
                                    <p>R$30.00</p>
                                    <p>R$20.00</p>
                                </div>
                            </div>
                            <div className="flex justify-center bg-gray-400 p-2 my-3 ">
                                <Link to="/finalizacao">
                                    Fazer Pedido
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrinho