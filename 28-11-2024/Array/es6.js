function Aes6() {
  const arrC = [3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 7, 7, 7, 7];
  const arrD = [];

  for (let elemento of arrC) {
    if (!arrD.includes(elemento)) {
      arrD.push(elemento);
    }
  }

  alert(arrD);
}
