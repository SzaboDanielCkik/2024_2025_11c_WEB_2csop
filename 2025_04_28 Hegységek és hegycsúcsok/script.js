
function elsoFeladatEllenorzes(){
    const joValasz = document.getElementById("börzsöny").checked;
    if(joValasz)
        return 2;
    const rosszValasz1 = document.getElementById("badacsony").checked;
    const rosszValasz2 = document.getElementById("bakony").checked;
    const rosszValasz3 = document.getElementById("bükk").checked;
    if(rosszValasz1 || rosszValasz2 || rosszValasz3)
        return -1;

    return 0;
}

function harmadikFeladatEllenorzes(){
    let valaszok = document.getElementsByName("harmadik");
    let jopont = 0;
    let rosszpont = 0;
    for(let i = 0; i<valaszok.length; i++){
        if(valaszok[i].checked && (valaszok[i].id ==="budaihegyseg" || valaszok[i].id==="keszthelyihegyseg" || valaszok[i].id === "pilis" || valaszok[i].id === "vertes")){
            jopont++;
        }
        else if(valaszok[i].checked){
            rosszpont--;
        }
    }
    if(rosszpont<0){
        if(jopont+rosszpont<0)
            return 0;
        else 
            return jopont+rosszpont;
    }
    else if(rosszpont === 0 && jopont === 4)
        return 8;
    else
        return jopont;

}


function kiertekeles(){
    let pont = 0;
    pont += elsoFeladatEllenorzes(); 
    pont += harmadikFeladatEllenorzes();
    console.log(pont);   
}

function betuMegjelenites(betu){
    document.getElementById("kepButton").innerText = betu;
}