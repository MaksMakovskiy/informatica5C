function FORINes6(){
const crive = {
    n: "SAD",
    c: "dS",
    e: 23,
    p: "ASDSAD",
  };
  
  for (let ch in crive) {
    if (typeof crive[ch] === "string") {
      alert(ch + ": " + crive[ch]);
    }
  }
}