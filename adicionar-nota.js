const notas = [10, 6, 8];

notas.push (7);        //adicionando novo número no final (7).PUSH: Só funciona se estiver associado ao um Array (notas.)

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);