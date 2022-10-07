import { useState } from "react"
import './index.css'




export default function Calcular() {
    const [gramas, setGramas] = useState(0);
    const [resp, setResp] = useState('');


    function calculo(){
        let total = 0
        if(gramas >= 1000){
           total = (gramas / 100) * 3.0;
        }
        else
           total = (gramas / 100) * 3.5;

        setResp(total);
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

            O total a pagar é R${resp}
            </div>

        </main>
    )
}