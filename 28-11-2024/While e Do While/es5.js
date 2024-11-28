function Wes5() {
  let n1 = 0;
  let n2 = 1;
  let ris = 0;

  do {
    alert(ris);
    ris = n1 + n2;
    n1 = n2;
    n2 = ris;
  } while (ris <= 100);
}
