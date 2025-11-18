import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <div className="flex justify-between items-center ">
                <div className="flex flex-col items-center w-full p-20 px-30 ">
                    <form action="" className="w-xs p-10 bg-gray-200 rounded-2xl">
                        <h2 className="flex justify-center font-bold text-2xl">Login</h2>
                        {/* div usuario */}
                        <div className="flex flex-col w-full">                            
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
                        <div className="my-2">
                            <button className=" rounded-xl border-2 w-full p-2 bg-lime-200 hover:bg-lime-300">Entrar</button>
                        </div>
                        <div className="flex justify-center hover:font-bold">
                            <Link to="/cadastro">
                                <h3>Não tem conta? </h3>
                            </Link>
                        </div>
                    </form>

                </div>
                <div className="flex flex-col items-center w-full p-20 px-30 ">
                    <img src="https://ik.imagekit.io/xmqgsi96x8/loginfarmacia2.jpg" alt="imagem de uma farmaceutica" />
                </div>
            </div>
        </>
    )
}

export default Login