function es3(){
    
const stringa = document.getElementById("es3string").value;
var risultato = "";

if(stringa.length === 0){
    risultato = "vuota";
}else{
    risultato = "non vuota";
}

alert("La stringa: "+ risultato);
}