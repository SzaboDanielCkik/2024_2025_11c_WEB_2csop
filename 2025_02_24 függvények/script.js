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

function main(){
    console.log("Függvény belső magja");
    ertekekMegadasa();   
    let rnd = randomSzam(-10,10); 
    console.log(rnd);

    // Tömbfeltöltés - visszaadja a feltöltött tömböt
    // fv - tört, logikai, egész-index, stb
}

main();