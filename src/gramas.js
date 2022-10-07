import { useState } from "react"
import './index.css'

import { calcularGrama } from "./service";




export default function Calcular() {
    const [gramas, setGramas] = useState(0);
    const [resp, setResp] = useState('');


    function calculo(){
        try{
        let total = calcularGrama(gramas);

        setResp(' O total a pagar é R$' + total);
        } catch(err) {
            setResp(err.message)
        }
    }


    return (
        <main className="page-grama">
            <div>
                <h1> Calcular Gramas</h1>
            </div>

            <div>
                <input type='number' value={gramas} onChange={e => setGramas(Number(e.target.value))} />
            </div>

            <div>
            <button onClick={calculo}>Calcular</button>
            </div>

            <div>

           {resp}
            </div>

        </main>
    )
}