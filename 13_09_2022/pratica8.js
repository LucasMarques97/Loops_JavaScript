//ATIVIDADE 1 Informar todos os números de 1000 a 1999 que quando divididos por 11 obtemos resto = 5. (FOR)

// for(var i = 1000; i <= 1999; i++){
//     {if(i%11==5)
//     console.log(i)}
// }

//ATIVIDADE 2 Ler 10 números e imprimir quantos são pares e quantos são ímpares. (FOR)

// var par = 0
//  var impar = 0

//     for (i = 1; i <=10; i++) {
//     var num = Number(prompt("Digite um Número: "))
//     if (num %2==0) {
//         par++   }
//     else impar++
//     }

//     console.log(`${par} dos números são Pares`)
//     console.log(`${impar} dos números são Ímpares`)

//ATIVIDADE 3 Solicitar a idade de várias pessoas e imprimir: Total de pessoas 
//com menos de 21 anos. Total de pessoas com mais de 50 anos. 
//O programa termina quando idade for =-99.(WHILE)
/*
var jovem = 0
var faustao = 0

while (idade != -99) {
   var idade = Number(prompt("Digite a Idade: \nDigite -99 para Sair do Programa!"))
   if (idade <= 21){
       jovem++
   }
   else if (idade >= 50){
       faustao++
   }
}

alert(`Total de Pessoas com Menos de 21 Anos: ${jovem}
     \nTotal de Pessoas com Mais de 50 Anos: ${faustao}`)
*/
// Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos indivíduos de uma região.
//  Para tanto, a cada uma das pessoas era perguntado: 
//  idade, sexo (1-feminino / 2-masculino / 3-Outros), 
//  e as opções (1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era agressiva).
//   Pede-se para elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre: (WHILE)

// o número de pessoas calmas; 
// o número de mulheres nervosas; 
// o número de homens agressivos; 
// o número de outros calmos;
// o número de pessoas nervosas com mais de 40 anos
// o número de pessoas calmas com menos de 18 anos.

//ATIVIDADE 4 Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos indivíduos
// de uma região. Para tanto, a cada uma das pessoas era perguntado: idade, sexo 
//(1-feminino / 2-masculino / 3-Outros), e as opções (1, se a pessoa era calma; 2, se a pessoa era nervosa 
//e 3, se a pessoa era agressiva). Pede-se para elaborar um sistema que permita ler os dados 
//de 150 pessoas, calcule e mostre: (WHILE)
/*
var jovem = 0
var faustao = 0
var totalCalmas = 0
var mulheresNervosas = 0
var outrosCalmos = 0
var homensAgressivos = 0
var abaixo18 = 0
var i = 0

while (i <= 5){
var idade = Number(prompt("Digite a Idade: "))
var sexo = Number(prompt("Informe o seu Sexo: \n1 - Masculino\n2 - Feminino\n3 - Outros"))
var temperamento = Number(prompt("Informe o seu Temperamento: \n1 - Calmo\n2 - Nervoso\n3 - Agressivo"))

if (idade <= 18 && temperamento == 1) { // calmos abaixo de 18
   abaixo18++
   totalCalmas++
}
if (idade >= 40 && temperamento == 2) { // nervosos acima de 40
    faustao++
}
if (sexo == 2 && temperamento == 2) { // mulheres nervosas
    mulheresNervosas++
}
if (temperamento == 1){ // total calmas
    totalCalmas++
}
if (sexo == 3 && temperamento == 1){ // Outros calmos
outrosCalmos++
totalCalmas++
}
if (sexo == 1 && temperamento == 3) { // homens agressivos
homensAgressivos++
i++
}

alert(`Números de Pessoas Calmas: ${totalCalmas}
\nNúmero de Mulheres Nervosas: ${mulheresNervosas}
\nNúmero de Homens Agressivos: ${homensAgressivos}
\nNúmero de Outros Calmos: ${outrosCalmos}
\nPessoas Nervosas Acima de 40: ${faustao}
\nPessoas Calmas Abaixo de 18: ${abaixo18}`)
*/
//ATIVIDADE 5 Crie um programa que leia um número do teclado até que encontre
// um número igual a zero. No final, mostre a soma dos números digitados.(DO...WHILE)
/*
var soma = 0

do {

  var num = Number(prompt("obs:Digite zero para encerrar.\nDigite um Número: "))
  soma += num

} while (num != 0)
  alert(`A soma dos números é: ${soma}`)
  console.log(`A soma dos números é: ${soma}`)
*/

// Escrever um programa que receba vários números inteiros no teclado. 
// E no final imprimir a média dos números múltiplos de 3.
// Para sair digitar 0 (zero).(DO...WHILE)

// ATIVIDADE 6 Escrever um programa que receba vários números inteiros no teclado. E no final imprimir 
//a média dos números múltiplos de 3. Para sair digitar 0(zero).(DO...WHILE)
/*
var media
var soma = 0

do {

  var num = Number(prompt("Digite 0 Para Sair!\nDigite um Número: "))
  soma += num
  media = soma / 3

} while (num != 0)

  alert(`A média dos números digitados é: ${Math. round(media * 100) / 100}`)
  console.log(`A média dos números é: ${Math. round(media * 100) / 100}`)
*/