function invertir(texto) {
  let textoArray = texto.split("");
  let textoInvertido = [];

  for (let i = 0; i < textoArray.length; i++) {
    textoInvertido[i] = textoArray[textoArray.length - 1 - i];
  }

  console.log(textoInvertido.join(""));
}

invertir("marron");
