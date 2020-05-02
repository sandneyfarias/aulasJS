let alunos = ['KLB', 'Laranja', 'Cego Jeremias'];

console.log(alunos);
console.log(alunos[0]);

// Propriedade length
console.log(alunos.length);

// Método join
let resultado = alunos.join(",");
console.log(resultado);

//  Método indexOf
resultado = alunos.indexOf('Laranja');
console.log(resultado);

// Métodos push e pop
resultado = alunos.push('Ressende');
console.log(resultado);
console.log(alunos);

retultado = alunos.pop();
console.log(resultado);
console.log(alunos);
