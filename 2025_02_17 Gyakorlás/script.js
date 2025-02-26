console.log("kapcsolat");

// A megadott adatszekezetből készíts egy statisztikát! 
let adatok = ["Béla", 4.6, 1234, "Csilla", 4.7, 784, "Józsi", 4.5, 983, "Jani", 3.87, 473, "Kata", 4.3, 1002];
// 1. Milyen a tanulók (össz)átlaga?
// 2. Van-e kitűnő tanuló?
// 3. Ki a legjobb tanuló?
// 4. Ki hiányzott a legkevesebbet? 
// 5. Hány tanuló tanuló hiányzott 1000 óra alatt?
console.log(adatok);

// 1. feladat
let osszeg = 0;
for(let i = 1; i<adatok.length; i+=3)
{
    osszeg += adatok[i];
}
console.log(osszeg / (adatok.length/3));

//2. feladat
let j = 1;
while(j<adatok.length && adatok[j] !== 5)
{
    j+=3;
}
if(j<adatok.length)
{
    console.log("Van kitűnő tanuló");
}
else
{
    console.log("Nincs kitűnő tanuló");
}

//3. feladat
let maxi = 1;
for(let i = 1; i<adatok.length; i+=3)
{
    if(adatok[maxi]<adatok[i])
    {
        maxi = i;
    }
}
console.log(adatok[maxi-1]);

//4. feladat
let mini = 2;
for(let i = 2; i<adatok.length; i+=3)
{
    if(adatok[mini]>adatok[i])
    {
        mini = i;
    }
}
console.log(adatok[mini-2]);

//5. feladat
let db = 0;
for(let i = 2; i<adatok.length; i+=3)
{
    if(adatok[i]<1000) 
    {
        db++;
    }
}
console.log(db);