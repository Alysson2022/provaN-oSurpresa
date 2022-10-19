import { useState } from 'react'
import './index.css'
import { retanguloLinhas } from './service';

export default function Retangulo() {
    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    const [resp, setResp] = useState([]);

    function mostrarArray() {
        try {
            let resposta = retanguloLinhas(base, altura);
            console.log(resposta);
            setResp(resposta);
        } catch (err) {
            setResp(err.message);
        }
    }

    return (
        <main>
            <div >
                <div>
                    Base: <input type='number' placeholder='base' value={base} onChange={e => setBase(Number(e.target.value))} />
                </div>

                <div>
                    Altura: <input type='number' placeholder='altura' value={altura} onChange={e => setAltura(Number(e.target.value))} />
                </div>

                <div className='container-asteriscos'>

                    {resp.map(item =>
                        <p> {item} </p>
                    )}

                </div>

                <button onClick={mostrarArray}>Calcular</button>
            </div>
        </main>
    )
}