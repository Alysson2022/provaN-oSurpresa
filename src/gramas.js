import { useState } from "react"





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
        <main>
            <h1> Calcular Gramas</h1>
            

            <div>
                <input type='number' value={gramas} onChange={e => setGramas(Number(e.target.value))} />
            </div>

            <button onClick={calculo}>Calcular</button>

            O total a pagar é R${resp}

        </main>
    )
}