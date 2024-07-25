alert('boas vindas ao jogo do número secreto');
let numeroMaximo = 30;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1

// enquanto chute não for igual ao número secreto
while (chute !=  numeroSecreto) {
       chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // se o chute for igual ao número secreto
    if ( chute == numeroSecreto) {
        break;
    }else {
        if (chute > numeroSecreto) {
            alert(`o número secreto é menor que ${chute}`);
        }else {
            alert(`o número secreto é maior que ${chute}`);
        }
        //  tentativas = tentativas + 1; 
         tentativas++;
    }

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}. `);




























