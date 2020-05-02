const sentimento = 'saudades';
const adjetivo = 'querido';
const professor = 'Sandney';

let texto = 'Estamos com ' 
+ sentimento 
+ ' do nosso ' 
+ adjetivo + ' Tio ' + professor;
console.log(texto);

let textoTS = `Estamos 
com ${sentimento} 
do nosso ${adjetivo} 
tio ${professor}`;
console.log(textoTS);