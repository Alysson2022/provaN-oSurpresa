import './index.css'
import { useState } from "react"
import { ingressoCinema } from './service';



export default function IngressoCinema() {
    const[inteiras, setInteiras] = useState(0);
    const[meias, setMeias] = useState(0);
    const[dia, setDia] = useState('');
    const[nacional, setNacional] = useState(false);
    const[resp, setResp] = useState(0);

    function chamarIngresso() {
        try{
            let precoIngresso = ingressoCinema(inteiras, meias, dia, nacional);
            setResp(precoIngresso);
        } catch(err) {
            setResp(err.message);
        }
    }

    return(
        <main className='page-ingresso'>
            <div className='container-ingresso'>
                <h1>Calcular Preço</h1>
                <div>
                    Adultos:  <input type='number' min={0} value={inteiras} onChange={e => setInteiras(Number(e.target.value))} />
                </div>

                <div>
                    Crianças:  <input type='number' min={0} value={meias} onChange={e => setMeias(Number(e.target.value))} />
                </div>

                <div>
                    Dia da semana:  <input type='text' value={dia} onChange={e => setDia(e.target.value)} />
                </div>

                <div>
                    É nacional:  <input type='checkbox' value={nacional} onChange={e => setNacional(e.target.checked)} />
                </div>

                <button onClick={chamarIngresso}>Verificar</button>
            
                
                {resp}

            </div>
        </main>
    )
}