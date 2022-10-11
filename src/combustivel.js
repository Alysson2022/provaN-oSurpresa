import { useState } from 'react'
import { calcularCombustivel } from './service';
import './index.css'

export default function Combustivel() {
    const[capacidade, setCapacidade] = useState(0);
    const[consumo, setConsumo] = useState(0);
    const[distancia, setDistancia] = useState(0);
    const[resp, setResp] = useState(0);

    function calculoAutonomia() {
        try{
            let resultado = calcularCombustivel(capacidade, consumo, distancia);

            setResp(resultado);
        } catch(err) {
            setResp(err.message);
        }
    }

    return(
        <main>
            <div>
                <div>
                    Digite a capacidade do tanque: <input type='number' placeholder='Em litros' value={capacidade} onChange={e => setCapacidade(e.target.value)} />
                </div>

                <div>
                    Digite o consumo do seu veículo: <input type='number' placeholder='Em litros' value={consumo} onChange={e => setConsumo(e.target.value)} />
                </div>

                <div>
                    Digite a distância da sua viagem: <input type='number' placeholder='Em litros'  value={distancia} onChange={e => setDistancia(e.target.value)} />
                </div>

                <div>
                    Número de paradas: {resp}
                </div>

                <button onClick={calculoAutonomia}>Calcular</button>
            </div>
        </main>
    )
}