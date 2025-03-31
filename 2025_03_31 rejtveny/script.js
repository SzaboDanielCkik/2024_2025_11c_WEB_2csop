
function matrixKialakitas(sorok, k){
    let matrix = [];
    for(let i = k; i<k+10; i++){
        let tomb = [];
        console.log(sorok[i]);
        let sor = sorok[i].split(" ");
        for(let j = 0; j<10; j++){
            tomb.push(parseInt(sor[j]));
        }
        matrix.push(tomb);
    }
    return matrix;
}

function adatokBeolvasasa(szoveg){
    const sorok = szoveg.split(";");
    //console.log(sorok);
    const n = parseInt(sorok[0]);
    let adatok = [];
    for(let i = 1; i<sorok.length; i+=11){
        const adat = {
            nev: sorok[i],
            matrix: matrixKialakitas(sorok, i+1)
        }
        adatok.push(adat);
    }
    return adatok;
}

function main(szoveg){
    const adatok = adatokBeolvasasa(szoveg);
    console.table(adatok);
}

main(szoveg);