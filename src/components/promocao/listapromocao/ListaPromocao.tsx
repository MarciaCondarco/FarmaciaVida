import { useNavigate } from "react-router-dom"
import Card from "../cardpromocao/Card"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import type Produto from "../../../models/Produto";

function ListaPromocao() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [produtos, setProdutos] = useState<Produto[]>([])

    const {usuario, handleLogout} = useContext(AuthContext)

    const token = usuario.token

    useEffect(()=>{
        if(token === ''){
            alert('Você precisa logar para continuar a compra')
            navigate('/login')
        }
    }, [token])

    useEffect(()=>{
        buscarProdutos()
    }, [produtos.length])



    async function buscarProdutos() {
        try {

            setIsLoading(true)

            await buscar('/promocao', setProdutos, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <>

            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#312e81"
                        size={32}
                    />
                </div>
            )}

            <div className="grid grid-cols-4">

                    {(!isLoading && produtos.length === 0) && (
                            <span className="text-3xl text-center my-8">
                                Nenhum Produto foi encontrado!
                            </span>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                            {
                                produtos.map((produto) => (
                                    <Card key={produto.id} produto={produto}/>
                                ))
                            }
                    </div>
            </div>
        </>
    )
}

export default ListaPromocao