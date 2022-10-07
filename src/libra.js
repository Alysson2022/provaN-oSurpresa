import { useState } from "react"


export default function Libra() {

    const[dia, setDia] = useState(0);
    const[mes, setMes] = useState('');
    const[resp, setResp] = useState('');

    function verificarSigno() {
        let msg = '';

        if(dia >= 23 && mes == 'setembro' || dia <= 22 && mes == 'outubro' ) {
            msg = 'sim'
        }

        else{
            msg = 'nao'
        }

        setResp(msg);
    }

    


    return(
        <main>
            <div>oiii</div>


            <div>
                Dia:  <input type='number' value={dia} onChange={e => setDia(Number(e.target.value))} />
            </div>

            <div>
                Mês:  <input type='text' value={mes} onChange={e => setMes(e.target.value)} />
            </div>

            <button onClick={verificarSigno}>Verificar</button>
        
            É do signo de Libra? {resp} 
        </main>
    )
}