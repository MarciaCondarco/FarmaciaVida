

function Navbar() {
    return (
        <>
            <div className="flex justify-between bg-lime-200 px-5 py-5">

                {/* logo */}
                <div
                    className=""
                >
                    <img src="https://i.imgur.com/G7WFsPp.png" alt="imagem da logo da farmacia VIDA"
                        className="w-15 h-15"
                    />
                </div>

                {/* botões */}
                <div
                    className="flex justify-center gap-10 items-center"
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