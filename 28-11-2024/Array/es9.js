function Aes9() {
  const ar = ["SDSDDDSSD", "zcxzc", "dsds", "ssad"];
  let dist = 0;

  for (let str of ar) {
    dist += str.length;
  }
  const distM = dist / ar.length;

  alert("Media dist: " + distM);
}
