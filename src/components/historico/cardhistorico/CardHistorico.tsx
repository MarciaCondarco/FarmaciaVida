
function CardHistorico() {
    return (
        <>
            <div>

                {/* setor da ficha do produto */}
                <div className="flex justify-between px-30 py-3 mx-5 bg-gray-100">
                    {/* foto */}
                    <div className="w-30 px-3 bg-gray-200 py-3">
                    <img src="https://i.imgur.com/MqfsAIk.png" alt="foto do produto" className="w-50"/>
                    </div>
                    {/* descrição do produto */}
                    <div className="px-20">
                        <h2>Protetor Solar BTSKILL 50ml</h2>
                        <div className="my-6 font-bold text-2xl">
                            <p>R$60.00</p>
                        </div>
                        <div className="flex gap-30 my-6">
                            <a href="#" className="flex justify-center p-2 bg-gray-200">ADICIONAR CARRINHO</a>
                            {/* botão de quantidade */}
                            <div className="flex justify-center p-2 bg-gray-200">
                                <a href="#">COMPRAR NOVAMENTTE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardHistorico