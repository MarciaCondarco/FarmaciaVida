

function Navbar() {
    return (
        <>
            <div className="flex justify-between bg-lime-200 px-5 py-5">

                {/* logo */}
                <div
                    className=""
                >
                    <img src="https://imgur.com/G7WFsPp" alt="imagem da logo da farmacia VIDA" />
                </div>

                {/* botões */}
                <div
                    className="flex justify-center gap-8"
                >
                    <a href="#">Historico</a> 
                    <a href="#">Categoria</a>
                    <a href="#">Promoção</a>
                    <a href="#">Carrinho</a>
                </div>
            </div>
        </>
    )
}

export default Navbar