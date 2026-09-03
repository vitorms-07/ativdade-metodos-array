let alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana"];

console.log(alunos.includes("Helena"));

console.log(alunos.indexOf("Helena"));

console.log(alunos.slice(1, 5));

console.log(alunos.splice(3, 1));

alunos.splice(2, 0, "Lucas");
console.log(alunos);

console.log(alunos.sort());

console.log(alunos.reverse());

console.log(alunos.join(", "));