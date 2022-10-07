import { useState } from "react"
import './index.css'



export default function Acai(){
    const [qtdPeq, setQtdPeq] = useState(0);
    const [qtdMedio, setQtdMedio] = useState(0);
    const [qtdGrande, setQtdGrande] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [resp, setResp] = useState(0);

    function CalcularValor(){
        let total = 0

        let soma = qtdPeq * 13.5 + qtdMedio * 15 + qtdGrande * 17.5;
        let desc = soma * desconto / 100;
        total = soma - desc;
        setResp(total);
    }



    return(
        <main className="page-acai">
            <h1>Calcular Gramas</h1>

            <div>
              qtd Pequeno:  <input type='number' value={qtdPeq} onChange={e => setQtdPeq(Number(e.target.value))} />
            </div>

            <div>
            qtd Médio:  <input type='number' value={qtdMedio} onChange={e => setQtdMedio(Number(e.target.value))} />
            </div>


            <div>
            qtd Grande: <input type='number' value={qtdGrande} onChange={e => setQtdGrande(Number(e.target.value))} />
            </div>

            <div>
            desconto: <input type='number' value={desconto} onChange={e => setDesconto(Number(e.target.value))} />
            </div>

            <button onClick={CalcularValor}>Calcular</button>
            Total a pagar é R${resp}
        </main>
    )
}