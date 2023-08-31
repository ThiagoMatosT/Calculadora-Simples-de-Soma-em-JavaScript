// Módulo para leitura de entrada no Node.js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para ler a entrada e realizar o cálculo
function main() {
  rl.question('', function(A) {
    rl.question('', function(B) {
      // Converte as entradas para números inteiros
      A = parseInt(A);
      B = parseInt(B);

      // Calcula a soma dos valores
      const X = A + B;

      // Imprime o resultado formatado
      console.log('X =', X);

      rl.close();
    });
  });
}
