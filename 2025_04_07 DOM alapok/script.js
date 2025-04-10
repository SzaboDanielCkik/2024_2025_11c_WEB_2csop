function elsoOra(){
    document.body.style.backgroundColor = "yellow";
    let fodiv = document.getElementById("fodiv");
    // document.getElementById("fodiv").style.backgroundColor = "red";
    // document.getElementById("fodiv").style.color = "aqua";
    // document.getElementById("fodiv").style.width = "80%";
    fodiv.style.backgroundColor = "red";
    fodiv.style.color = "aqua";
    fodiv.style.width = "80%";

    let bekezdes = document.getElementById("lorembekezdes");
    //console.log(bekezdes);
    const szoveg = bekezdes.innerHTML;
    //console.log(szoveg.split(" "));
    bekezdes.innerHTML = "ez egy<br> bekezdés";
    //bekezdes.innerText = "ez egy<br> bekezdés";
}

function masodikOra(){
    //legelső megadott selektort kezeli
    //let div = document.querySelector("div");
    //div.style.backgroundColor = "green";
    let divek = document.querySelectorAll("div");
    console.log(divek);
    divek[1].style.backgroundColor = "blue";
    for(let i = 0; i<divek.length; i++){
        divek[i].style.width = "80%";
    }

    document.querySelector("#fodiv").style.padding = "10px";
    let img = document.querySelector("img");
    img.style.height = "20vw";
    img.title = "képre írt szöveg";
    img.kiskutya = "érték";
    //console.log(img);
   
}

function keretezes(){
    let borderesek = document.querySelectorAll(".border");
    console.log(borderesek);
    for(let i = 0; i<borderesek.length; i++){
        borderesek[i].style.borderTop = "1px solid black";
        borderesek[i].style.borderLeft = "2px dotted orange";
        borderesek[i].style.borderBottom = "3px dashed black";
        borderesek[i].style.borderRight = "4px solid darkgreen";
    }
}

function Belepes(){
    //objektum.value -> beírt szöveg
    // console.log(document.getElementById("azonosito").value);
    // console.log(document.getElementById("jelszo").value);
    //const azon = document.getElementById("azonosito");
    const azon = document.querySelector("#azonosito");
    console.log(azon.value+" "+azon.style.width);


    //const jelsz = document.getElementById("jelszo");
    const jelsz = document.querySelector("#jelszo");
    console.log(jelsz.value);
}

function main(){
    elsoOra();
    masodikOra();

}

main();