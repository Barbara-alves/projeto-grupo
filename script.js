//declarar a matriz para receber as notas dos alunos
let notas = [];
//declarar o vetor para receber a média dos alunos
let medAlunos = [];
//declarar o vetor que vai receber a média das provas
let medProvas = [];

//fazer o for para popular a tabela dinamicamente
for(i = 0; i < 10; i++) {
    notas[i] = [];
    for (j = 0; j < 3; j++){
        notas[i][j] = (Math.random()*10).toFixed(1);
    }
}

//console.log(notas);.

function mediaAlunos (nota1, nota2, nota3){
    return((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3).toFixed(1);
}

for (i = 0; i < notas.length; i++){
}

console.log(mediaAlunos(10,10,10))

