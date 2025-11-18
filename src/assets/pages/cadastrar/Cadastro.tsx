import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <div className="flex justify-between items-center ">
                <div className="flex flex-col items-center w-full p-20 px-30 ">
                    <img src="https://ik.imagekit.io/xmqgsi96x8/parquepessoassaudaveis.jpg" alt="imagem de pessoas feliz"/>
                </div>
                <div className="flex flex-col items-center w-full p-20 px-30 ">
                    <form action="" className="w-xs p-10 bg-gray-200 rounded-2xl">
                        <h2 className="flex justify-center font-bold text-2xl">Cadastro</h2>
                        {/* div nome */}
                        <div className="flex flex-col w-full">                            
                            <label htmlFor="nome"> Nome</label>
                            <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Digite o seu nome"
                            className="border-2 rounded-xl bg-white"
                            />
                        </div>
                        {/* div usuario */}
                        <div className="flex flex-col w-full ">                            
                            <label htmlFor="usuario"> Usuario</label>
                            <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Digite o seu nome de usuario"
                            className="border-2 rounded-xl bg-white"
                            />
                        </div>
                        {/* div senha */}
                        <div className="flex flex-col w-full ">                            
                            <label htmlFor="Senha"> Senha</label>
                            <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 rounded-xl bg-white"
                            />   
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="confirmarSenha">Confirmar Senha</label>
                            <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            className="border-2 rounded-xl bg-white"
                            />
                        </div>
                        {/* div foto */}
                        <div className="flex flex-col w-full">                            
                            <label htmlFor="foto"> Foto</label>
                            <input
                            type="text"
                            id="foto"
                            name="foto"
                            placeholder="Digite o a foto"
                            className="border-2 rounded-xl bg-white"
                            />
                        </div><br></br>
                        <div className="mb-4">
                            <Link to="/login">
                                <button className="rounded-xl border-2 w-full p-2 bg-lime-200 hover:bg-lime-300">Cadastrar</button>
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login