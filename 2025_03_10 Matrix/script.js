
function random(a,b){
    return Math.floor(Math.random() * (b-a+1) + a);
}

function matrixFeltoltes(sor, oszlop){
    //n soros m oszlopos
    let matrix = [];
    for(let i = 0; i<sor; i++){
        let st = [];
        for(let j = 0; j<oszlop; j++){
            // if(random(1,100)<=50){
            //     st.push(1);
            // }
            // else{
            //     st.push(0);
            // }
            st.push(random(0,1));
        }
        matrix.push(st);
    }
    return matrix;
}

function hanySzamVanMatrixban(matrix, szam){
    let db = 0;
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            if(matrix[i][j] === szam){
                db++;
            }
        }
    }
    return db;
}

function main(){
    // let matrix = [[]];
    // matrix.push = [2,3,3,4,5];
    // console.log(matrix);
    let matrix = matrixFeltoltes(5,6);
    console.table(matrix);
    // N x M -es mátrixfeltolt függvény
    // 1 vagy 0  - egyenlő arányban.

    console.log(hanySzamVanMatrixban(matrix, 1));
    console.log(hanySzamVanMatrixban(matrix, 0));
    //console.log(hanySzamVanMatrixban(matrix, 12));

    // Melyik sorban van a legtöbb egyes?

    const index = 

    // Melyik oszlopban van a legtöbb nulla?
    // Van-e olyan sor, amiben csak nullák vannak?

}

main();