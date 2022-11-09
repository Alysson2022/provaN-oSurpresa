const prompt = require('prompt-sync')();

function testarNumero() {
    let n = parseInt(Math.random() * 1000);
    console.log(n);

    for(let i = 1; i <= 10; i++) {
        let pergunta = prompt('Digite um número!');
        let resposta = Number(pergunta);

        if(resposta == n) {
            console.log('Acertou!');
            break;
        }
        else if(resposta > n) {
            console.log('Número é menor!');
        }
        else {
            console.log('Número é maior!');
        }

        if(i == 10) {
            console.log('Suas tentativas terminaram!');
        }
    }
}

testarNumero();