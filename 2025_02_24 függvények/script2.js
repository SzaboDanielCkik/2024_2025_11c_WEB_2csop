
function random(a,b){
    return Math.floor(Math.random()*(b-a+1)+a);
}

function tombFeltotes(n){
    let tomb = [];
    for(let i = 0; i<n; i++){
        tomb.push(random(10,120)*50);
    }
    return tomb;
}

function maximumErtek(tomb){
    let maxe = tomb[0];
    for(let i = 1; i<tomb.length; i++){
        if(tomb[i]>maxe){
            maxe = tomb[i];
        }
    }
    return maxe;
}

function maximumIndex(tomb){
    let maxi = 0;
    for(let i = 1; i<tomb.length; i++){
        if(tomb[i]>tomb[maxi]){
            maxi = i;
        }
    }
    return maxi;
}

function vaneCsucs(tomb){
    let i = 1;
    while(i<tomb.length-1 && !(tomb[i]>1000 && tomb[i-1]<tomb[i] && tomb[i+1]<tomb[i])){
        i++;
    }
    return i<tomb.length-1;
}

function main(){
    let tomb = tombFeltotes(13);
    console.log(tomb);
    let maxe = maximumErtek(tomb);
    console.log(maxe);
    let maxi = maximumIndex(tomb);
    console.log(tomb[maxi]);
    let vane = vaneCsucs(tomb); 
    console.log(vane);
}

main();