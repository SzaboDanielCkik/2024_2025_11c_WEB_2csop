console.log("kapcsolat");

var a = 5;
var b = 8;
var c = 1;

if(a+b>c && a+c>b && b+c>a)
    console.log("szerkeszthető");
else
    console.log("nem szerkeszthető");

var sec = 7385;
// % - modulus, maradék
// 2 óra 3 perc 5 sec
var ora = Math.floor(sec / 3600);
//2 óra
var perc = Math.floor((sec - ora * 3600 )/60);
// perc = 7385 - 2*3600 = 185
var mp = (sec - ora * 3600 ) - perc * 60;

var ora2 = Math.floor(sec / 3600);
var perc2 = Math.floor((sec % 3600) /60);
var mp = sec % 60;


var szoveg = "Géza kék az ég";
var ujszoveg = "";

for(let i = 0; i<szoveg.length; i++)
{
    if(szoveg[i] != " ")
    {
        ujszoveg += szoveg[i];
    }
}
console.log(ujszoveg);

var tomb = [];
// [a,b]
// Math.random() * (b-a+1) + a;
for(let i = 0; i<13; i++)
{
    //let rnd = Math.random()*(10-(-10)+1)+(-10);
    let rnd = Math.floor(Math.random()*21-10);
    tomb.push(rnd);
}
console.log(tomb);

var maxi = 0;
for(let i = 1; i<tomb.length; i++)
{
    if(tomb[i]>tomb[maxi])
    {
        maxi = i;
    }
}
console.log(maxi+1);
console.log(tomb[maxi]);

