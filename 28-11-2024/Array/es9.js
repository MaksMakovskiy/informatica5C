const ar = ["SDSDDDSSD", "zcxzc", "dsds", "ssad"];
let dist = 0;

for (let str of ar) {
  dist += str.length;
}

const distM = dist / ar.length;

console.log("Media dist:", distM);
