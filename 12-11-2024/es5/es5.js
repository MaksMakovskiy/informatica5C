function es5(){
    
const num = document.getElementById("es5num").value;
var rusl = "";

if(num > 0){
    rusl = "> 0";

}else if(num < 0){
    rusl = "< 0";
}else{

    rusl = "= 0";
}
alert("Il numero " + rusl);}