/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function esAnagrama(palabra1, palabra2) {
  let palabra1Array = palabra1.split("");
  palabra1Array.sort();
  palabra1Array.join("");
  let palabra1String = palabra1Array.toString();
  palabra1String.toLowerCase();

  let palabra2Array = palabra2.split("");
  palabra2Array.sort();
  palabra2Array.join("");
  let palabra2String = palabra2Array.toString();
  palabra2String.toLowerCase();
  if (palabra1String === palabra2String) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

esAnagrama("roma", "amor"); // true
