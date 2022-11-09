import { useEffect, useState } from 'react';
import './index.css'
import { calcMaior, calcMedia, calcMenor, criarArray } from './service';



export default function MediaAlunos() {
    const [alunos, setAlunos] = useState(0);
    const [qtdAlunos, setQtdAlunos] = useState([]);

    const [media, setMedia] = useState(0);
    const [maior, setMaior] = useState(0);
    const [menor, setMenor] = useState(0);

    function mostrarQuantidade() {
        const x = criarArray(alunos);
        setQtdAlunos(x);
    }

    function alterar(pos, novoValor) {
        qtdAlunos[pos] = Number(novoValor);
        setQtdAlunos([...qtdAlunos]);
    }

    function calcularMedia() {
        const a = calcMedia(qtdAlunos);
        const b = calcMaior(qtdAlunos);
        const c = calcMenor(qtdAlunos);

        setMedia(a);
        setMaior(b);
        setMenor(c);
    }




    return (
        <main>

            <div>
                Qtd.Alunos: <input type='number' value={alunos} onChange={e => setAlunos(Number(e.target.value))} />
                <button onClick={mostrarQuantidade}>Ok</button>
            </div>

            {qtdAlunos.map((item, pos) =>
                <div>
                    Alunos: {pos + 1} <input value={qtdAlunos[pos]} onChange={e => alterar(pos, e.target.value)} />
                </div>
            )}

            <button onClick={calcularMedia}>Calcular</button>

            <div>
                <div>
                    Média: {media}
                </div>
                <div>
                    Maior: {maior}
                </div>
                <div>
                    Menor: {menor}
                </div>
            </div>


        </main>
    );
}