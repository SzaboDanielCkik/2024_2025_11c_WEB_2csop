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
    //console.log("max:"+TombMaxIndex(tomb));
    //console.log("Van-e nulla: "+VaneElem(tomb,0));
    //Hány darab negatív szám van?
    //Pozitív számok átlaga?
    //Ha van benne 10-es akkor hányadik helyen?
}

main();