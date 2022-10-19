import { useState } from 'react'
import { calculoCafe } from './service';
import './index.css'

export default function Cafe() {
    const[alunos, setAlunos] = useState();
    const[capac, setCapac] = useState();
    const[mililitros, setMililitros] = useState();
    const[resp, setResp] = useState();

    function calcularCafe() {
        try {
            let resposta = calculoCafe(alunos, capac, mililitros);
            setResp(resposta);
            console.log(resposta);
        } catch(err) {
            setResp(err.message);
        }
    }

    return(
        <main>
            <div>
                <div>
                    Digite a quantidade de alunos: <input type='number' placeholder='alunos' value={alunos} onChange={e => setAlunos(Number(e.target.value))} />
                </div>

                <div>
                    Digite a capacidade litros da cafeteira: <input type='number' placeholder='capac' value={capac} onChange={e => setCapac(Number(e.target.value))} />
                </div>

                <div>
                    Digite o quanto cada aluno bebe: <input type='number' placeholder='em mililitros' value={mililitros} onChange={e => setMililitros(Number(e.target.value))} />
                </div>

                

                <div>
                    Litros: {resp}
                </div>

                <button onClick={calcularCafe}>Calcular</button>
            </div>
        </main>
    )
}