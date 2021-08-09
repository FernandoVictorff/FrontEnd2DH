/* Microdesafio 1 */

let notas = [10.0, 2.0, 7.0, 8.0];
let soma = 0;
let indiceBimestre = 0;
const media = 4.0;

notas.forEach((nota) =>{
    soma += nota;
    console.log(soma);
});

let mediaFinal = soma / media;

console.log("Sua média é => " + mediaFinal);
    
