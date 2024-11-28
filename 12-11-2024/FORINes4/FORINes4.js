function FORINes4()
{const str = document.getElementById("FORINes4str").value;
let ct = 0;

for (let ch in str) {
    ct++;
}

alert("Numero di caratteri:" + ct);
}