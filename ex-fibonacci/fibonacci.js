const readline = require('readline');


function fibonacci(limit) {
  let fib = [0, 1];
  let nextFib = 0;

  while (nextFib <= limit) {
    nextFib = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(nextFib);
  }

  return fib;
}


function isFibonacci(num) {
  let fibSeq = fibonacci(num);
  return fibSeq.includes(num);
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Digite um número: ', (input) => {
  const number = parseInt(input);

  if (isNaN(number)) {
    console.log('Por favor, digite um número válido.');
  } else {
    if (isFibonacci(number)) {
      console.log(`O número ${number} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`O número ${number} NÃO pertence à sequência de Fibonacci.`);
    }
  }

  rl.close();
});
