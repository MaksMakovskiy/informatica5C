function Wes7() {
  let n = 5;
  let f = 1;

  let num = n;
  do {
    f *= n--;
  } while (n > 0);

  alert("Il fattoriale di" + num + ":" + f);
}
