import { CheckIcon } from "@phosphor-icons/react"

function Finalizacao() {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="flex-col items-center justify-center px-80 py-30 bg-gray-200 m-6 rounded-2xl">
                    <div className="flex justify-center">
                        <CheckIcon size={32} className="text-green-800 font-bold text-4xl"/>
                    </div>
                    {/* mensgaem de finalização da compra */}
                    <div className="m-9">
                        <h2 className="text-2xl font-bold">
                            Compra finalizada com sucesso
                        </h2>
                    </div>
                </div>

                {/* sugestões */}
            </div>
        </>
    )
}

export default Finalizacao