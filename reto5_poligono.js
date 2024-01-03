function areaPoligono() {
  let opcion = prompt("Elige una opcion: triangulo, cuadrado, circulo");

  if (opcion === "triangulo") {
    let base = prompt("Dime la base");
    let altura = prompt("Dime la altura");
    alert("el area es " + (base * altura) / 2);
  }

  if (opcion === "cuadrado") {
    let lado = prompt("Dime el lado");
    alert("el area es " + lado * lado);
  }

  if (opcion === "circulo") {
    let radio = prompt("Dime el radio");
    alert("el area es " + 2 * radio * Math.PI);
  }
}

areaPoligono();
