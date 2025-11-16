import ListaHistorico from "../../../components/historico/listahistorico/ListaHistorico"


function Historico() {
    return (
        <>
            <div>
                <div className="flex font-bold justify-around p-6 ">
                    <h2 className="text-2xl">Histórico</h2>
                </div>
                <div className="gap-6">
                    <ListaHistorico />
                </div>
                <div className="gap-6">
                    <ListaHistorico />
                </div>
                <div className="gap-6">
                    <ListaHistorico />
                </div>
            </div>
        </>
    )
}

export default Historico