import { useState } from 'react'
import { calcularSalario } from './service';
import './index.css'

export default function Salario() {
    const[salario, setSalario] = useState(0);
    const[bonus, setBonus] = useState(0);
    const[desconto, setDesconto] = useState(0);
    const[resp, setResp] = useState(0);

    function calculoSoldo() {
        try{
            let resultado = calcularSalario(salario, bonus, desconto);

            setResp('Seu salário líquido é de R$' + resultado);
        } catch(err) {
            setResp(err.message)
        }
    }

    return(
        <main className="page-salario">
            <div>
                <div>
                    Digite seu salário: <input type='number' placeholder='R$' value={salario} onChange={e => setSalario(Number(e.target.value))} />
                </div>

                <div>
                    Digite seu bônus: <input type='number' placeholder='Em porcentagem' value={bonus} onChange={e => setBonus(Number(e.target.value))} />
                </div>
                
                <div>
                    Digite seu desconto: <input type='number' placeholder='Em reais' value={desconto} onChange={e => setDesconto(Number(e.target.value))} />
                </div>

                <div>
                    Resultado: {resp}
                </div>

                <button onClick={calculoSoldo}>Calcular</button>
            </div>
        </main>
    )
}