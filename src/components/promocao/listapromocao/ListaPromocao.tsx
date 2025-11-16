import Card from "../cardpromocao/Card"

function ListaPromocao() {
    return (
        <>
            <div className="grid grid-cols-4">          
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default ListaPromocao