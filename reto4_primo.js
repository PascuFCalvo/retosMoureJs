function primos() {
  let j = 2;

  while (j <= 100) {
    let primo = true;
    for (let i = 2; i < j; i++) {
      if (j % i === 0) {
        primo = false;
        break;
      }
    }
    if (primo) {
      console.log(`${j}`);
    }
    j++;
  }
}

primos();
