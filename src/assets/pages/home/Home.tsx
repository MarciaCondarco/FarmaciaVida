import { BabyIcon, HighlighterCircleIcon, PillIcon, ShowerIcon, StethoscopeIcon } from "@phosphor-icons/react"

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

            {/* <ListaPromocao /> */}
        </>
    )
}

export default Home