console.log("kapcsolat");

var a = 13;
var s = "13";
var sz = '15'; //"'", '"'
var b = true;

console.log(a);
console.log(s);
console.log(sz);
console.log(b);

// matematikai operátorok: +-*/%
// logikai operátorok: && || 
// bitenkénti operátorok: & | ^
// szöveges operátor: konkatenálás-összefűzés +

console.log(s+b);
console.log(a+b); //true 1, false 0
console.log(a === s); // == értékvizsgálat, === érték+típus vizsgálat
console.log(a+s);
console.log(a+parseInt(s));

/* Vezérlő szerkezetek
    Szekvencia - utasítások sorozata
    Szelekció - elágazás(ok)
    Iteráció - ciklus(ok)
*/

/* Elágazás */
if(a === s) {
    console.log(`${a} =? ${s} A két érték egyenlő!`);
}
else{
    console.log(`${a} =? ${s} A két érték nem egyenlő!`);
}

// switch (a){
//     case 1: console.log("Valami1");
// }

/* Ciklus */
// Számlálós - for 
// Elől tesztelős - while
// Hátul tesztelős - do while

var sz = "";
for(let i = 0; i<10; i++){
    sz+= i+" ";
}
console.log(sz);

sz = '';
var j = 100;
while(j<110){
    sz+= j+' ';
    j++;
}
console.log(sz);

sz = ``;
var k = 1000;
do{
    sz += k+` `;
    k++;
}while(k<1010);
console.log(sz);

// HF "feladatok 2021-2022.pdf" - 1-25 feladat csütörtök

// [a,b] ~ [1,6]

// Math.random() -> ]0,1[
// Math.random() * 1000 -> ]0,1[ * 1000 = ]0,1000[ 
// Math.random() + 31 -> ]0,1[ + 31 = ]31,32[
// Math.random() + 31 * 1000 -> ]0,1[+31000 = ]31000,31001[
// (Math.random() + 31) * 1000 -> ]31,32[*1000 = ]31000,32000[
// Math.random() * 6 + 1  -> ]0,6[ + 1 = ]1,7[ 
let rnd = Math.random() * 6 + 1;
console.log(Math.floor(rnd));

//[-10,5] -> 16db -10
// 16 = 5 -(-10) + 1

for(let i = 0; i<20; i++)
{
    rnd = Math.random() * 16 - 10;
    console.log(Math.floor(rnd));
}
//a<b; [a,b] -> Math.floor( Math.random() * (b-a+1) + a ); 

// HF 1-29.

