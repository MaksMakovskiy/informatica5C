function es4(){
   
const pO = document.getElementById("es4pO").value;

const sP = document.getElementById("es4sP").value;
const pS = pO - (pO * sP) / 100;
alert("Prezzo scontato: " + pS);}