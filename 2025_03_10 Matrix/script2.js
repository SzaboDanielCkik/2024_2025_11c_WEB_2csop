/*
    1. Töltsön fel egy n x m-es mátrixot (ahol sorok és oszlopok száma egy véletlen szám [5,20] között.)
    Az értékek pedig legyenek úgy kigenerálva, hogy 70%-os valószínűséggel 0-t generál, 30%-os valószínűséggel kétjegyű számot!

    2. Adja meg a legnagyobb érték sorát és oszlopát!
    3. Adja meg hány darab nulla van!
    4. Van-e a kétjegyű számok között 7-tel osztható, van hányadik sor és oszlop!

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

function main(){
    const n = random(5,20);
    const m = random(5,20);
    let matrix = matrixFeltoltes(n,m);
    console.table(matrix);

    let maxij = maxSorOszlop(matrix);
    console.log(maxij);
}   

main();