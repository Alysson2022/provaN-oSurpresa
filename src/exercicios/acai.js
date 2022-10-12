import { useState } from "react"
import './index.css'
import { calcular } from "./service";

import { toast } from "react-toastify";



export default function Acai(){
    const [qtdPeq, setQtdPeq] = useState(0);
    const [qtdMedio, setQtdMedio] = useState(0);
    const [qtdGrande, setQtdGrande] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [resp, setResp] = useState(0);

    function Calcular(){
        try{
        let total = calcular(qtdPeq, qtdMedio, qtdGrande, desconto);

        setResp( "Total a pagar é R$" + total);
    } catch(err) {
        setResp(err.message);
    }
    }



    return(
        <main className="page-acai">
            <h1>Calcular Gramas</h1>

            <div>
              qtd Pequeno:  <input type='number' min={0} value={qtdPeq} onChange={e => setQtdPeq(Number(e.target.value))} />
            </div>

            <div>
            qtd Médio:  <input type='number' min={0} value={qtdMedio} onChange={e => setQtdMedio(Number(e.target.value))} />
            </div>


            <div>
            qtd Grande: <input type='number' min={0} value={qtdGrande} onChange={e => setQtdGrande(Number(e.target.value))} />
            </div>

            <div>
            desconto: <input type='number' min={0} value={desconto} onChange={e => setDesconto(Number(e.target.value))} />
            </div>

            <button onClick={Calcular}>Calcular</button>
           {resp}
        </main>
    )
}