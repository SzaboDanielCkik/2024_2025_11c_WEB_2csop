function random(a,b){
    return Math.floor(Math.random()*(b-a+1)+a);
}

function kockaGeneralas(){
    const kockaDiv = document.getElementById("kockaDiv");
    const dbInput = document.getElementById("dbInput").value;
    kockaDiv.innerHTML="";

    for(let i = 0; i<dbInput; i++)
    {
        let ujKep = document.createElement("img");
        const rand = random(1,6);
        ujKep.setAttribute("src","kockak/Kocka"+rand+".png");
        kockaDiv.appendChild(ujKep);
    }
}