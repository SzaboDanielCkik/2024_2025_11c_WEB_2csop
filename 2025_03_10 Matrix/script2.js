/*
    1. Töltsön fel egy n x m-es mátrixot (ahol sorok és oszlopok száma egy véletlen szám [5,20] között.)
    Az értékek pedig legyenek úgy kigenerálva, hogy 70%-os valószínűséggel 0-t generál, 30%-os valószínűséggel kétjegyű számot!

    2. Adja meg a legnagyobb érték sorát és oszlopát!
    3. Adja meg hány darab nulla van!
    4. Van-e a kétjegyű számok között 7-tel osztható, van hányadik sor és oszlop!
    5. Készítsen egy nxn-es mátrixot, és adja meg a két átló összegének különbségét!

*/

function random(a,b){
    if(a>b){
        const c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random()*(b-a+1)+a);
}

function matrixFeltoltes(n,m){
    let matrix = [];
    for(let i = 0; i<n; i++){
        let st = [];
        for(let j = 0; j<m; j++){
            let valszinu = random(0,100);
            if(valszinu>70){
                st.push(random(10,99));
            }
            else{
                st.push(0);
            }
        }
        matrix.push(st);
    }
    return matrix;
}

function maxSorOszlop(matrix){
    let maxi = 0;
    let maxj = 0;
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            if(matrix[i][j] > matrix[maxi][maxj]){
                maxi = i;
                maxj = j;
            }
        }
    }
    //console.log(maxi+" "+maxj);
    return [maxi, maxj];
}

function megszamolSzam(matrix, szam){
    let darab = 0;
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            if(matrix[i][j] === szam){
                darab++;
            }
        }
    }
    return darab;
}

function vaneSzammalOszthatoIndex(matrix, szam){
    let i = 0;
    let j = 0;
    while(i<matrix.length){
        j = 0;
        while(j<matrix[i].length && !(matrix[i][j]>9 && matrix[i][j] % szam === 0)){
            j++;
        }
        if(j<matrix[i].length){
            return [i,j];
        }
        i++;
    }
    return [-1, -1];
}

function foAtloOsszege(matrix){
    let osszeg = 0;
    for( let i = 0; i<matrix.length; i++){
        osszeg+= matrix[i][i];
    }
    return osszeg;
}

function mellekAtloOsszege(matrix){
    let osszeg = 0;
    for( let i = 0; i<matrix.length; i++){
        osszeg+= matrix[i][matrix.length - i - 1];
    }
    return osszeg;
}

function transponalas(matrix){
    let tMatrix = matrix;
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            tMatrix[i][j] = matrix[j][i];
        }
    }
    return tMatrix;
}


function atlokKulonbsege(matrix){
    const foatlo = foAtloOsszege(matrix);
    const mellekatlo = mellekAtloOsszege(matrix);
    //console.log(foatlo+ " " + mellekatlo);
    return Math.abs(foatlo-mellekatlo);
}

function main(){
    const n = random(5,20);
    const m = random(5,20);
    let matrix = matrixFeltoltes(n,m);
    console.table(matrix);

    let maxij = maxSorOszlop(matrix);
    console.log(maxij);

    let darabSzam = megszamolSzam(matrix, 0);
    console.log(darabSzam);

    const szam = 7;
    let vaneIndex = vaneSzammalOszthatoIndex(matrix, szam);
    console.log(vaneIndex);
    if(vaneIndex[0] !== -1){
        console.log(`Van benne ${szam}-val osztható szám, (${vaneIndex[0]},${vaneIndex[1]}) helyen.`);
    }
    else{
        console.log(`Nincs benne ${szam}-val osztható szám.`);
    }


    const ujMatrix = matrixFeltoltes(5,5);
    console.table(ujMatrix);
    const kulonbseg = atlokKulonbsege(ujMatrix);
    console.log(kulonbseg);

    const transponalt = transponalas(ujMatrix);
    console.table(transponalt);
}   

main();