import { useState } from "react";
import type Produto from "../../../models/Produto";
import Card from "../cardpromocao/Card";

function ListaPromocao() {

    const [Produto] = useState<Produto[]>([])
    return (
        <>
            <div className="grid grid-cols-4">    
                
                <Card  key={Produto.id}/>
            </div>
        </>
    )
}

export default ListaPromocao