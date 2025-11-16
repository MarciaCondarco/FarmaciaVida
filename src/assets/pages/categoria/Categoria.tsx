import { Link } from "react-router-dom"


function Categoria() {
    return (
        <>
            <div className="flex p-9 gap-30 justify-center bg-gray-200 ">
                {/* barra de categoria - ira se transformar em componente */}
                <div>Beleza</div>
                <div>Higiene</div>
                <div>Medicamento</div>
                <div>Saude</div>
                <div>Mamãe e bebê</div>  
            </div>
                {/* cards */}

                <div>
                    <div className="flex justify-center items-center font-bold text-3xl p-4">
                        <h2>Categoria</h2>
                    </div>
                        <div id="promocao" className="flex justify-center gap-30 my-5">
                        
                            {/* card-1 */}
                                <div className="border-black border-2 bg-white my-30 px-6 py-6 hover:scale-110 transition-transform duration-300 ease-in-out">
                                    <Link to="/produto">
                                        <img src="https://i.imgur.com/U3C9nUO.png" alt="imagem de um protetor solar"
                                        className="w-40 "/>
                                        <h2 className="flex items-center justify-center">Protetor solar</h2>
                                        <p className="flex justify-center font-bold">R$70.00</p>
                                    </Link>
                                </div>
            
            
                            {/* card-2 */}
                            <div className="border-black border-2 bg-white my-30 px-6 py-6 hover:scale-110 transition-transform duration-300 ease-in-out">
                                <img src="https://i.imgur.com/MqfsAIk.png" alt="imagem de um medicamento" 
                                    className="w-40"/>
                                <h2 className="flex items-center justify-center">Dipirona</h2>
                                <p className="flex justify-center font-bold">R$12.00</p>
                            </div>
            
                            {/* card-3 */}
                            <div className="border-black border-2 bg-white my-30 px-6 py-6 hover:scale-110 transition-transform duration-300 ease-in-out">
                                <img src="https://i.imgur.com/oGgdTJU.png" alt="imagem de uma batom" 
                                    className="w-40"/>
                                <h2 className="flex items-center justify-center">Batom vermelho</h2>
                                <p className="flex justify-center font-bold">R$8.00</p>
                            </div>
            
                            {/* card-4 */}
                            <div className="border-black border-2 bg-white my-30 px-6 py-6 hover:scale-110 transition-transform duration-300 ease-in-out">
                                <img src="https://i.imgur.com/oGgdTJU.png" alt="imagem de uma batom" 
                                    className="w-40"/>
                                <h2 className="flex items-center justify-center">Batom vermelho</h2>
                                <p className="flex justify-center font-bold">R$8.00</p>
                            </div>
                        </div>
                </div>

                {/* card2 */}
                <div>
                        <div id="promocao" className="flex justify-center gap-30 my-10">
                        
                            {/* card-1 */}
                                <div className="border-black border-2 bg-white my-30 px-6 py-6 hover:scale-110 transition-transform duration-300 ease-in-out">
                                    <Link to="/produto">
                                        <img src="https://i.imgur.com/U3C9nUO.png" alt="imagem de um protetor solar"
                                        className="w-40 "/>
                                        <h2 className="flex items-center justify-center">Protetor solar</h2>
                                        <p className="flex justify-center font-bold">R$70.00</p>
                                    </Link>
                                </div>
            
            
                            {/* card-2 */}
                            <div className="border-black border-2 bg-white my-30 px-6 py-6 hover:scale-110 transition-transform duration-300 ease-in-out">
                                <img src="https://i.imgur.com/MqfsAIk.png" alt="imagem de um medicamento" 
                                    className="w-40"/>
                                <h2 className="flex items-center justify-center">Dipirona</h2>
                                <p className="flex justify-center font-bold">R$12.00</p>
                            </div>
            
                            {/* card-3 */}
                            <div className="border-black border-2 bg-white my-30 px-6 py-6 hover:scale-110 transition-transform duration-300 ease-in-out">
                                <img src="https://i.imgur.com/oGgdTJU.png" alt="imagem de uma batom" 
                                    className="w-40"/>
                                <h2 className="flex items-center justify-center">Batom vermelho</h2>
                                <p className="flex justify-center font-bold">R$8.00</p>
                            </div>
            
                            {/* card-4 */}
                            <div className="border-black border-2 bg-white my-30 px-6 py-6 hover:scale-110 transition-transform duration-300 ease-in-out">
                                <img src="https://i.imgur.com/oGgdTJU.png" alt="imagem de uma batom" 
                                    className="w-40"/>
                                <h2 className="flex items-center justify-center">Batom vermelho</h2>
                                <p className="flex justify-center font-bold">R$8.00</p>
                            </div>
                        </div>
                </div>
        </>
    )
}

export default Categoria