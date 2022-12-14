export function libra(mes, dia) {
        let msg = '';

        if(!Number.isInteger(dia)) 
            throw new Error('Somente número inteiros');

        if (dia <= 0 || dia >= 32)
            throw new Error('Dia Inválido');

        if (dia >= 23 && mes == 'setembro' || dia <= 22 && mes == 'outubro') {
            msg = 'Sim'
        } else {
            msg = 'Não'
        }
        return msg;
   
}



export function calcular(qtdPeq, qtdMed, qtdGra, desc) {


    if (qtdPeq < 0 || qtdMed < 0 || qtdGra < 0 || desc < 0)
        throw new Error("Valor Inválido");

    let total = 0

    let soma = qtdPeq * 13.5 + qtdMed * 15 + qtdGra * 17.5;
    let desconto = soma * desc / 100;
    total = soma - desconto;
    return total;

}

export function calcularGrama(gramas) {

        

        if(gramas < 0) 
            throw new Error('Peso inválido!')
    
        let total = 0
        if (gramas >= 1000) {
            total = (gramas / 100) * 3.0;
        }
        else
            total = (gramas / 100) * 3.5;

        return total;
    }

export function calcularSalario(salario, bonus, desc) {

    if(salario < 0 || bonus < 0 || desc < 0) 
            throw new Error('Alguma informação está inválida!')

    let total = 0;

    let bonussalario = (salario * bonus) / 100;
    let soldo = salario + bonussalario;
    total = soldo - desc;

    return total;
}

export function calcularCombustivel(capac, consumo, dist) {   
    
    if(capac < 0 || consumo < 0 || dist < 0) 
            throw new Error('Alguma informação está inválida!')

    
    let resultado = 0;

    let litrosdistancia = dist / consumo;
    let paradas = litrosdistancia / capac;

    resultado = Math.ceil(paradas);

    if(resultado === Infinity) {
        return 'Consumo ou Capacidade não podem ser zero!';
    }


    // let autonomia = (capac * consumo) / dist;

   
    
    return resultado;
}
 

export function calcularTemperatura(temp) {
    if(temp < 36) {
        return 'Hipotermia';
    }

    else if(temp >= 36 && temp < 37.6) {
        return 'Normal';
    }

    else if(temp >= 37.6 && temp < 39.6) {
        return 'Febre';
    }

    else if(temp >= 39.6 && temp < 41) {
        return 'Febre alta';
    }

    else {
        return 'Hipertermia';
    }
}

export function orcamentoFamiliar(ganhos, gastos) {
    let porcgastos = (gastos * 100) / ganhos;

    if(porcgastos <= 20) {
        return 'Parabéns, você está gerenciando bem seu orçamento!';
    }

    else if(porcgastos <= 50) {
        return 'Muito bem, seus gastos não ultrapassam metade dos seus ganhos!';
    }

    else if(porcgastos <= 80) {
        return 'Atenção, melhor conter os gastos!';
    }

    else if(porcgastos <= 100) {
        return 'Cuidado, seu orçamento pode ficar comprometido!';
    }

    else {
        return 'Orçamento comprometido! Hora de rever seus gastos!';
    }
}

export function ingressoCinema(inteiras, meias, dia, nacional) {
    let precoIngressos = (inteiras * 28.50) + (meias * 14.25);

    if(nacional === true) {
        precoIngressos = (inteiras * 5) + (meias * 5);
    }

    else if(dia === 'quarta-feira') {
        precoIngressos = (inteiras * 14.25) + (meias * 14.25);
    }

    return precoIngressos;
}


export function contarAte(inicio, fim) {
    let array = [];

    for(let i = inicio; i <= fim; i++) {
        array[i - inicio] = i;
    }

    return array;
}

export function linha(tamanho){
    let array = [];
    

    for(let i = 0; i < tamanho; i++){
        array[i] = '*';    
    }
    return array;
}

export function retanguloLinhas(base, altura) {
    let arraygrande = [];
    let array = [];

    for(let i = 0; i < altura; i++) {

        for(let h = 0; h < base; h++) {
            array[h] = '*';
        }

        arraygrande[i] = array;
    }

    return arraygrande;
}



export function calculoCafe(N, L, D) {
    /* let litros = 1;
    let pessoascomcafe = (L * 1000) / D;
    let litrosemml = L * 1000;
    let litrosemm = L * 1000;

    let mililitrototal = N * D;

    while(mililitrototal > litrosemml) {
        litrosemml += litrosemm;
        litros++;
    }

    console.log(litrosemml)

    
    if(D > (L * 1000)) {
        let teste = (D / 1000) * N;
        return teste;
    } 

    for(let i = 1; i <= L; i++) {
        if(pessoascomcafe < N) {
            litros *= i;
            pessoascomcafe *= i;
        }

        
    }

    return litros; */

    let tt = (N * D) / 1000;
    let l = L;

    while(tt > l){
        l += L
    }

    return l;
}

export function calculoMontante(entrada, capital, taxa, periodo) {

    


    let capitalcalculado = entrada - capital;
    let taxaemporc = taxa / 100;

    let montante = capitalcalculado * Math.pow((1 + taxaemporc), periodo);
    let juros = montante - capitalcalculado;
    let valordaparcela = montante / (periodo * 12);

    return ({
       m: Math.abs(montante.toFixed(2)), 
       j: Math.abs(juros.toFixed(2)), 
       v: Math.abs(valordaparcela.toFixed(2))});
}

/* export function listarAlunos(qtdAlunos) {
    let array = [];

    for(let i = 1; i <= qtdAlunos; i++){
        array = [...array, i];

    }

        return array;
} */


export function criarArray(tamanho) {
    let notas = [];
    for (let volta = 1; volta <= tamanho; volta++) {
        notas.push(0);
    }
    return notas;
}

export function calcMedia(notas) {
    let soma = 0;
    for (let volta = 0; volta < notas.length; volta++) {
        soma = soma + notas[volta];
    }
    let m = soma / notas.length;
    return m;
}

export function calcMaior(notas) {
    let m = 0;
    for (let volta = 0; volta < notas.length; volta++) {
        if (notas[volta] > m) {
            m = notas[volta];
        }
    }
    
    return m;
}

export function calcMenor(notas) {
    let m = 11;
    for (let volta = 0; volta < notas.length; volta++) {
        if (notas[volta] < m) {
            m = notas[volta];
        }
    }
    
    return m;
}


// teste
/*function media (){
    let todasNotas = [2,4,5,4,3];

    let soma = 0;

    for(let i in todasNotas){
        soma += todasNotas[i];
    }

    let x = soma / todasNotas.length;

    return x;


}*/