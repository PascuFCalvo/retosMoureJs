function contando(frase) {
  let fraseArray = frase.split(" ");
  let palabrasDiferentes = [];

  for (let i = 0; i < fraseArray.length; i++) {
    let iguales = false;

    for (let j = 0; j < palabrasDiferentes.length; j++) {
      if (fraseArray[i] === palabrasDiferentes[j]) {
        iguales = true;
        break;
      }
    }

    if (!iguales) {
      palabrasDiferentes.push(fraseArray[i]);
    }
  }
  let repeticiones = 0;

  for (let i = 0; i < palabrasDiferentes.length; i++) {

    for (let j = 0; j < fraseArray.length; j++) {
      if (palabrasDiferentes[i] === fraseArray[j]) {
        repeticiones++;
      }
    }

    palabrasDiferentes[i] = palabrasDiferentes[i] + " " + repeticiones;
  }

  console.log(palabrasDiferentes);
}

contando("hola mundo mundo mundo hola la");
