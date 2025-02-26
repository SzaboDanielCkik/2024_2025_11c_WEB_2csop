console.log("kapcsolat");

/* 
6 játékos, 2 db 18 oldalú dobókockával játszik. 10 körön keresztül mindenki dob a két kockával, de csak azokat írják fel, amelyek 10-nél nagyobb értékű! (Nem minden körben lesz meg a 6 db érték.)
Generáljon ki számot a következő feltételekkel:
- Számok sorrendje: db1, x0,x1,x2, db2, x3,x4,x5, stb
- pl. 3 16 23 30 5 14 31 20 16 25 6 .... */

dobasok = [];
for(let i = 0; i<10;i++)
{
    let db = Math.floor(Math.random()*7);
    dobasok.push(db);
    for(let j = 0; j<db; j++)
    {
        let rnd = Math.floor(Math.random()*26+11);
        dobasok.push(rnd);
    }
}
console.log(dobasok);

// hányadik körben volt a legnagyobb a dobások átlaga?
//- pl. 3 16 23 30 5 14 31 20 16 25 6 .... 
let atlagok = [];
for(let i = 0; i<dobasok.length; i++){
    let darab = dobasok[i];
    let osszeg = 0;
    for(let j = i+1; j<=i+darab; j++){
        osszeg += dobasok[j];
    }
    if(darab !== 0){
        atlagok.push(osszeg/darab);
    }
    else{
        atlagok.push(0);
    }
    i+=darab;
}
console.log(atlagok);

let maxi = 0;
for(let i = 1;i<atlagok.length; i++){
    if(atlagok[maxi]<atlagok[i]){
        maxi = i;
    }
}
console.log(maxi+1);
