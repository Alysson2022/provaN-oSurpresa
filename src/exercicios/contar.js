import { useState } from 'react'
import { contarAte } from './service';
import './index.css'

export default function ContarAte() {
    const[inicio, setInicio] = useState();
    const[fim, setFim] = useState();
    const[resp, setResp] = useState([]);

    function mostrarArray() {
        try {
            let resposta = contarAte(inicio, fim);
            console.log(resposta);
            setResp(resposta);
        } catch(err) {
            setResp(err.message);
        }
    }


    return(
        <main className='page-contar'>
            <div className='container-contar'>
                <div>
                    Início: <input type='number' placeholder='inicio' value={inicio} onChange={e => setInicio(Number(e.target.value))} />
                </div>

                <div>
                    Fim: <input type='number' placeholder='fim' value={fim} onChange={e => setFim(Number(e.target.value))} />
                </div>

                <div className='container-array'>
                    {resp.map(item =>
                        <p>{item}</p>
                        )}
                </div>

                <button onClick={mostrarArray}>Calcular</button>
            </div>
        </main>
    )
}