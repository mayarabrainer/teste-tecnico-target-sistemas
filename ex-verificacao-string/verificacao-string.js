const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function contarLetraA(texto) {
    const letrasEncontradas = texto.match(/a/gi);
    const quantidade = letrasEncontradas ? letrasEncontradas.length : 0; 

    if (quantidade > 0) {
        console.log(`A letra 'a' foi encontrada ${quantidade} vezes.`);
    } else {
        console.log("A letra 'a' não foi encontrada.");
    }
}


rl.question('Digite uma string: ', (resposta) => {
    contarLetraA(resposta);
    rl.close();
});
