console.log("Kapcsolat");

// Generáljon ki addig két jegyű véletlen számokat, ameddig 13-al osztható számot nem kap!
// A számokat egymás mellé írva jelenítse meg! (nem használhat összetett szerkezetet!)

let sz = "";
do{
    var a = Math.floor(Math.random()*90+10);
    sz += a +" ";
}while(a % 13 != 0);
console.log(sz);

//let tomb = new Array();
//let tomb = new Array(3,2,5);
//let tomb = [3,2,5];
let tomb = [2,6,7,9,1];
console.log(tomb);
tomb.push(5);
tomb.push(6);
console.log(tomb);
console.log(`A tömb első eleme: ${tomb[0]}`);
console.log(`A tömb hossza : ${tomb.length}`);
console.log(`A tömb utolsó eleme: ${tomb[tomb.length-1]}`);

tomb[21] = 32;
//console.log(tomb);
//let a = parseInt("asdfa");

console.log(typeof(21));
console.log(isNaN(parseInt("asdfa")));
let b;
console.log(typeof(b));

// for(let i = 0; i<tomb.length; i++)
//     console.log(tomb[i]);

let tomb2 = [2,"alma", 3,"körte", true, [3,2,6,5], {}];
console.log(tomb2);
