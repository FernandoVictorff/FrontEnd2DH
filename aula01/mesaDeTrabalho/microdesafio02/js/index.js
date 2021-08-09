/* Microdesafio 2 */

let notas = [10.0, 2.0, 7.0, 8.0];
let soma = 0;
let indiceBimestre = 0;
const media = 4.0;

notas.forEach((nota) =>{
    indiceBimestre++;
    console.log(indiceBimestre + "º bimestre nota: " + nota);
});

notas.forEach((nota) =>{
    soma += nota;
});

let mediaFinal = soma / media;

if(mediaFinal >= 7.0){
    alert("Parabéns você foi aprovado!!");
}else{
    alert("Você foi reprovado!");
}