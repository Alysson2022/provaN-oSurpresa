import { useState } from "react"
import './index.css'

import {libra} from './service'

export default function Libra() {

    const[dia, setDia] = useState(0);
    const[mes, setMes] = useState('');
    const[resp, setResp] = useState('');

    function chamarSigno() {
        try{
        let msg = libra(mes, dia);
        
        setResp('É do signo de Libra? ' + msg);
        } catch(err){
            setResp(err.message)
        }
    }

    


    return(
        <main className="page-signo">

            <h1>Calcular Signo </h1>
            <div>
                Dia:  <input type='number' min={0} value={dia} onChange={e => setDia(Number(e.target.value))} />
            </div>

            <div>
                Mês:  <input type='text' value={mes} onChange={e => setMes(e.target.value)} />
            </div>

            <button onClick={chamarSigno}>Verificar</button>
        
            
                {resp}
        </main>
    )
}