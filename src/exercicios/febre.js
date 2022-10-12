import { useState } from 'react'
import './index.css' 
import { calcularTemperatura } from './service';

export default function Temperatura() {

    const[temperatura, setTemperatura] = useState(0);
    const[resp, setResp] = useState(0);

    function calculoTemp() {
        try{
            let resultado = calcularTemperatura(temperatura);

            setResp('A situação para sua temperatura é ' + resultado);
        } catch(err) {
            setResp(err.message);
        }
    }

    return(
        <main className='page-febre'>
            <div>
                <div>
                    Digite sua temperatura: <input type='number' placeholder='°celsius' value={temperatura} onChange={e => setTemperatura(e.target.value)} />
                </div>

                <div>
                    Resultado: {resp}
                </div>

                <button onClick={calculoTemp}>Calcular</button>
            </div>
        </main>
    )
}