/**
 * @param {string} texto 
 * @param {string} valorCifra 
 * @returns {string}
 */

function cifraDeCesar(texto, valorCifra) {            // Função para fazer a codificação ou descodificação, ela recebe dois parâmetros de entrada: o valor do texto e o valor da cifra
    let resultadoTexto = "";
    for (let i = 0; i < texto.length; i++) {          // Laço de repetição para iterar sobre cada elemento do texto
        let char = texto[i];                          // Variável que irá selecionar cada elemento do texto
        if (char.match(/[a-z]/i)) {                   // Laço condicional para verificar se o elemento é uma letra do alfabeto maiúscula ou minúscula
            let codigo = texto.charCodeAt(i);         
            if (codigo >= 65 && codigo <= 90) {                     // Se a letra for maiúscula o código realiza o deslocamento da letra de acordo com o valor da cifra  
                char = String.fromCharCode(((codigo - 65 + valorCifra) % 26) + 65);
            } else if (codigo >= 97 && codigo <= 122) {             // Se a letra for minúscula o código realiza o deslocamento da letra de acordo com o valor da cifra
                char = String.fromCharCode(((codigo - 97 + valorCifra) % 26) + 97);
            }
        }
        resultadoTexto += char;                       // O novo elemento modificado é adicionado à string resultadoTexto
    }
    return resultadoTexto;                            // Por fim o texto codificado ou descodificado é retornado
}

// Função que é chamada para pegar os valores do texto e da cifra para realizar a chamada na outra função e realizar a codificação ou descodificação
function cesar() {
    let texto = document.getElementById("texto-entrada").value;         // Variável para selecionar o valor do text-area
    let cifra = document.getElementById("cifra").value.toLowerCase();   // Variável para selecionar o valor da cifra
    let valorCifra;
    if (cifra.match(/[a-z]/i)) {                                        // Utilização do regex no caso do valor da cifra ser alguma letra do alfabeto e tranformá-la em um número
        valorCifra = cifra.charCodeAt(0) - 96;
    } else {
        valorCifra = parseInt(cifra);                                   // Transformação da cifra em inteiro caso ela seja um número
    }   
    let radioCifrado = document.getElementById("codificar");              // Variável para selecionar o radio codificado
    let resultadoElement = document.getElementById("resultado");        // Variável para selecionar a tag 'p' onde irá sair a mensagem codificada ou descodificada
    let resultado;                                                      // Variável que retornará o resultado que será exibido na tag 'p'

    if (radioCifrado.checked) { 
        resultado = cifraDeCesar(texto, valorCifra);                    // Caso o radio codificado seja marcado, a função cifraDeCesar é chamada e são passados os valores do texto e da cifra para fazer a codificação
    } else {
        resultado = cifraDeCesar(texto, 26 - valorCifra);               // Caso o radio codificado não esteja marcado, a função cifraDeCesar é chamada e são passados os valores do texto e da cifra para fazer a descodificação
    }

    resultadoElement.innerText = "Resultado: " + resultado;             // Mudança do innerText da tag 'p' para aparecer o resultado da codificação ou descodificação
}