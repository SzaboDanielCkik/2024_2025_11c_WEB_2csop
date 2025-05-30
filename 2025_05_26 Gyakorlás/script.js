let index = 1;
let utolso = 4;

function Elozore(){
    index--;
    if(index == 0)
        index = utolso;
    const kep = document.getElementById("kep");
    kep.setAttribute("src","kepek/image-"+index+".jpg");
}

function Kovetkezore(){
    index++;
    if(index == utolso + 1)
        index = 1;
    const kep = document.getElementById("kep");
    kep.setAttribute("src","kepek/image-"+index+".jpg");

}

function random(a,b){
    return Math.floor(Math.random()*(b-a+1)+a);
}

function kockaGeneralas(){
    const kockaDiv = document.getElementById("kockaDiv");
    const dbInput = document.getElementById("dbInput").value;
    kockaDiv.innerHTML="";
    const osszegLabel = document.getElementById("osszegLabel");
    let osszeg = 0;

    for(let i = 0; i<dbInput; i++)
    {
        let ujKep = document.createElement("img");
        const rand = random(1,6);
        osszeg += rand;
        ujKep.setAttribute("src","kockak/Kocka"+rand+".png");
        kockaDiv.appendChild(ujKep);
    }
    osszegLabel.innerHTML = "Összeg: "+osszeg;
}