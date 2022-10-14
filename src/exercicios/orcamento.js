import './index.css'
import { useState } from "react"
import { orcamentoFamiliar } from "./service";


export default function Orcamento() {
    const[ganhos, setGanhos] = useState(0);
    const[gastos, setGastos] = useState(0);
    const[resp, setResp] = useState(0);

    function chamarOrcamento() {
        try{
            let mensagem = orcamentoFamiliar(ganhos, gastos);
            setResp(mensagem);
        } catch(err) {
            setResp(err.message);
        }
    }

    return(
        <main className='page-orcamento'>
            <div className='container-orcamento'>
                <h1>Calcular Orçamento</h1>
                <div>
                    Ganhos:  <input type='number' min={0} value={ganhos} onChange={e => setGanhos(Number(e.target.value))} />
                </div>

                <div>
                    Gastos:  <input type='number' min={0} value={gastos} onChange={e => setGastos(Number(e.target.value))} />
                </div>

                <button onClick={chamarOrcamento}>Verificar Orçamento</button>
            
                
                {resp}
            </div>
        </main>
    )
}