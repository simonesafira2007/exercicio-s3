
const input = require('readline-sync')

// Por Inácia Simone da Silva

// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo: retornaNumMaior(10, 20, 30) // 30

function recebeTresNum (numero1,numero2,numero3){//(numero1, numero2, numero3){//as condições não estão funcionando, passa direto para o else
    
        if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3) {
        return numero1
           
            } else if (numero2 > numero1 && numero2 > numero3 && numero1 > numero3){
       
                 return numero2
    
                }else {
       
                return numero3
                
            }
      
    }
    console.log(recebeTresNum(30, 50, 7))
 

//exercicio 1 - FUNÇÃO MULTIPLICAÇÃO

function multiplicacao(num1, num2){ 
    return num1 * num2   
}
console.log(multiplicacao(5,10))

//FUNÇÃO SOMA

function soma(num1, num2){
    const total = num1 +num2
    return total
    }
    console.log(soma(5,10))

// 3) crie uma função que chame internamente qualquer uma das funções acima e imprima o resultado 
//no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function chamaFuncao(){

    return multiplicacao(2,4)
  
  }
   console.log (chamaFuncao())
  
   console.log(`O resultado da operação é : ${multiplicacao(2,4)}`)  
  
   
// 4) utilizando as funções de soma e multiplicação já feitas nos exercícios anteriores, 
//crie uma nova função que chame 
//essas funções e resolva a conta 36325 * (9824 + 777).

function chamaOperacoes(){
    return multiplicacao(36325, soma(9824, 777))
         
 }
    console.log(chamaOperacoes())
  
    
// 5) crie uma função que receba um número e imprima no console de 0 até o número informado. 
// Além disso, cada vez que imprimir o número, informe se é par ou ímpar. Exemplo: recebendo 5, 
// deve imprimir: "0 é par", "1 é ímpar", "2 é par", "3 é ímpar", "4 é par", "5 é ímpar". 

function recebeUmNumero(num){  
    soma = 0
    for(let i = 0; i <= num ; i++){
        console.log(i)
    
     if (i % 2 === 0 ){
         soma = soma + 1
        console.log( 'O número : ' ,i , 'é par')
     } else {
    
        console.log( 'O número : ' ,i , 'é ímpar')
     }
    }
    }
     console.log(recebeUmNumero(6))


 // 6) crie uma função que receba um número inteiro e imprima os números no console em ordem, de 1 até o número.
// Porém, para todos os números que forem múltiplos de 3, imprima na tela "banana" ao invés do número; para os 
//números múltiplos de 5, imprima "biscoito". 
//Para números múltiplos de 3 e 5, imprima "biscoito de banana". Exemplo, recebendo 15 o resultado será:
// 1
// 2
// banana
// 4
// biscoito
// banana
// 7
// 8
// banana
// biscoito
// 11
// banana
// 13
// 14
// biscoito de banana

function imprimaNoConsole (numero){
   

    for(let i = 1; i <= numero ; i++){
        console.log(i)
    if(i % 3 === 0 && i % 5 === 0){
        console.log('biscoito de banana')
    }else if (i % 5 === 0){
        console.log('biscoito')
    }else if (i % 3 === 0){
        console.log('banana')
       
    }

}

}
console.log(imprimaNoConsole(15))
    


 
// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 números
// 2. Se qualquer um dos três números não forem informados, a função deve retornar a string: "Preencha todos 
// os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 números, somando `2` ao resultado da multiplicação. 
//DICA: pesquise o que aparece no console.log caso uma função precise de um parâmetro, mas não receba nenhum.  

function preencheTodosValores(n1,n2,n3){

if (n1 != undefined && n2 != undefined  && n3 != undefined){
        
    return   (n1 * n2* n3) + 2
     
        } else {

                return (" Preencha todos os valores corretamente ")
                // a chamada da função sem parâmetros retorna frase acima
}

}
        console.log(preencheTodosValores(2, 3, 5)) 
        
        

// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um parâmetro for passado, retorne o valor do parâmetro.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum parâmetro for passado, retorne "não recebeu parâmetro"

function recebeTresParametros(entrada1,entrada2,entrada3){

    if ( entrada1 === undefined  &&  entrada2 === undefined  &&  entrada3 === undefined){ 
       console.log("Não recebeu parametro. ")

    
    }else if (entrada1 != undefined && entrada2 === undefined  && entrada3 === undefined ){
    return entrada1
        
    }else if (entrada1 != undefined && entrada2 != undefined  && entrada3 === undefined){
     return entrada1 + entrada2

    }else {
    return (entrada1 + entrada2) / entrada3

    } 
}
console.log(recebeTresParametros(20, 10, 5))


// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior 
//quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar
// "chocolate"

 
let palavra1 = 'banana'
let palavra2 = 'chocolate'
function maiorQtdCaracteres (palavra1, palavra2){
    if (palavra1.length > palavra2.length){

        return palavra1
    }else {
    return palavra2
}
}
console.log(maiorQtdCaracteres(palavra1,palavra2))



