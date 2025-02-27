//let a;


function ertekekMegadasa(){
    let a = 13;
    let b = 19;
    console.log(`${a}, ${b}`);
}

function randomSzam(a , b){
    if(b<a){
        let c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random()*(b-a+1)+a);
}

function TombGeneralas(n){
    let t = [];
    for(let i = 0; i<n;i++){
        t.push(randomSzam(-10,10));
    }
    return t;
}

function TombAtlag(tomb){
    let osszeg = 0;
    for(let i = 0; i<tomb.length;i++){
        osszeg += tomb[i];
    }
    return osszeg / tomb.length;
}

function TombMaxIndex(tomb){
    let maxi = 0;
    for(let i = 1; i<tomb.length; i++){
        if(tomb[i]>tomb[maxi])
            maxi = i;
    }
    return maxi;
}

function VaneElem(tomb, szam){
    let i = 0;
    while(i<tomb.length && tomb[i] != szam){
        i++;
    }
    return i<tomb.length;
}

function NegativDarab(tomb){
    let db = 0;
    for(let i = 0; i<tomb.length; i++){
        if(tomb[i] < 0){
            db++;
        }
    }
    return db;
}

function PozitivAtlag(tomb)
{
    let osszeg = 0;
    let db = 0;
    for(let i = 0; i<tomb.length; i++){
        if(tomb[i]>0){
            osszeg += tomb[i];
            db++;
        }
    }
    return osszeg / db;
}

function HanyadikHelyenVan(tomb, szam){
    let i = 0;
    while(i<tomb.length && tomb[i] != szam){
        i++;
    }
    if(i<tomb.length){
        return i;
    }
    else{
        return -1;
    }
}

function main(){
    console.log("Függvény belső magja");
    ertekekMegadasa();   
    let rnd = randomSzam(-10,10); 
    console.log(rnd);

    //Feltöltünk egy tömböt a paraméterben megadott darabszámmal.
    let tomb = TombGeneralas(13);
    console.log(tomb);

    // fv - Visszaadja a tomb elemeinek átlagát!
    // fv - Visszaadja a tomb legnagyobb elemének indexét!
    // fv - Van-e a számok között nulla?

    let atlag = TombAtlag(tomb);
    console.log("Tömb elemeinek átlaga:"+atlag.toFixed(2));
    console.log("Maximum érték helye:"+(TombMaxIndex(tomb)+1));
    console.log("Van-e nulla: "+VaneElem(tomb,0));
    //Hány darab negatív szám van?
    console.log(NegativDarab(tomb)+" darab negatív szám van.");
    //Pozitív számok átlaga?
    console.log("A pozitív számok átlaga: "+
        PozitivAtlag(tomb).toFixed(2));
    //Ha van benne 10-es akkor hányadik helyen?
    let index = HanyadikHelyenVan(tomb, 10);
    if(index >= 0)
        console.log((index+1)+". helyen van a 10es");
    else
        console.log("nincs benne 10es");

    //Hf rendezés
    // szűrd ki az egyedi értékeket, ha valamelyik több van, csak egyet használsz!
}

main();