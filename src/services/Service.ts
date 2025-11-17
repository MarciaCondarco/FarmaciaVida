import axios from "axios";

const api = axios.create({
    baseURL:'https://farmacia-o4nh.onrender.com'
})

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}