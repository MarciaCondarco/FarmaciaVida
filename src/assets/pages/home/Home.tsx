import {BabyIcon, HighlighterCircleIcon, PillIcon, ShowerIcon, StethoscopeIcon} from "@phosphor-icons/react"

function Home() {
    return (
        <>
        {/* carrossel */}
        <div
            className="bg-gray-400"
        >Home</div>

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
        </>
    )
}

export default Home