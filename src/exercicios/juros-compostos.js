import { useState } from 'react'
import './index.css'
import { calculoMontante } from './service';

export default function JurosCompostos() {
    const[entrada,setEntrada] = useState();
    const[capital,setCapital] = useState();
    const[taxa,setTaxa] = useState();
    const[periodo,setPeriodo] = useState();
    const[resp,setResp] = useState({});


    function Calcular(){
        try{
        let resposta = calculoMontante(entrada, capital, taxa, periodo);
        console.log(resposta);
        setResp(resposta)    

    }catch(err){
            setResp(err.message);
        }
    }




    return(
        <main className='page-ingresso'>
            <div className='container-ingresso'>
                <h1>Calcular Preço</h1>
                <div>
                    Entrada:  <input type='number' value={entrada} onChange={e => setEntrada(Number(e.target.value))} />
                </div>

                <div>
                    Capital:  <input type='number' min={0} value={capital} onChange={e => setCapital(Number(e.target.value))} />
                </div>

                <div>
                    Taxa:  <input type='number' min={0} value={taxa} onChange={e => setTaxa(Number(e.target.value))} />
                </div>

                <div>
                    Período:  <input type='number' min={0} value={periodo} onChange={e => setPeriodo(Number(e.target.value))} />
                </div>

                <p>Montante: {resp.m}</p>
                <p>Juros: {resp.j}</p>
                <p>Parcela: {resp.v}</p>
                
                
                

                <button onClick={Calcular}>Verificar</button>
            
    
            

            </div>
        </main>
    )
}