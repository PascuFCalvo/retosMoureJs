console.log("hola");

function fibonacci() {
  let sucesion = [];
  let limite = 0;

  while (limite < 50) {
    if (limite < 2) {
      sucesion.push(limite);
      limite++;
    } else {
      sucesion.push(sucesion[limite - 1] + sucesion[limite - 2]);
      limite++;
    }
  }

  console.log(sucesion);
}

fibonacci();
