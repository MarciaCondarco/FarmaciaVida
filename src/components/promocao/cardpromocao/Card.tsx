import { Link } from "react-router-dom"
// import type Produto from "../../../models/Produto"


// interface CardProps{
//     produto:Produto
// }

function Card() {
    return (
        <>
            {/* cards-promoção */}
                <div id="promocao" className="flex justify-center gap-30 my-10">
                        
                {/* card-1 */}
                    <div className="border-black border-2 bg-white my-30 px-6 py-6 hover:scale-110 transition-transform duration-300 ease-in-out">
                        <Link to="/produto">
                                <img src="https://i.imgur.com/U3C9nUO.png" alt="imagem de um protetor solar"
                                className="w-40 "/>
                                <h2 className="flex items-center justify-center">Protetor Solar</h2>
                            <p className="flex justify-center font-bold">R$70.00</p>
                        </Link>
                    </div>
                </div>
        </>
    )
}

export default Card