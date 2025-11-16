import { BabyIcon, HighlighterCircleIcon, PillIcon, ShowerIcon, StethoscopeIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
        {/* carrossel */}
        <div className="bg-gray-400 h-[440px] w-full flex ">
            <img src="https://i.imgur.com/yjfCFiO.png" alt="uma imagem escrito vida farmacia" width={900}
            className="w-202 object-contain"/>
        </div>

        {/* categoria */}
            <div
                className="flex justify-center items-center gap-30 h-23"
            >
                <div
                
                ><HighlighterCircleIcon size={32} weight="regular"
                    className="hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                </div>

                <div>
                    <ShowerIcon size={32} weight="regular"
                        className="hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                </div>

                <div>
                    <PillIcon size={32} weight="regular"
                        className="hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                </div>
                <div>
                    <StethoscopeIcon size={32} 
                        className="hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                </div>
                <div>
                    <BabyIcon size={32} weight='regular'
                        className="hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                </div>
            </div>

            {/* cards-promoção */}
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
        </>
    )
}

export default Home