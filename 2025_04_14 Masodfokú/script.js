
function egyMegoldasKiiratasa(a,b){
    const x = -b/(2*a);
    document.getElementById("megoldas1").innerHTML = "X<sub>1</sub>: "+x;
}

function kettoMegoldasKiiratasa(a,b,d){
    const x1 = (-b+Math.sqrt(d))/(2*a);
    const x2 = (-b-Math.sqrt(d))/(2*a);
    document.getElementById("megoldas1").innerHTML = "X<sub>1</sub>: "+x1.toFixed(2);
    document.getElementById("megoldas2").innerHTML = "X<sub>2</sub>: "+x2.toFixed(2);
}

function masodfoku()
{
    const a = parseInt(document.getElementById("aSzam").value);
    const b = parseInt(document.getElementById("bSzam").value);
    const c = parseInt(document.getElementById("cSzam").value);
    const D = b*b-4*a*c;
    
    let megoldasokSzama = document.getElementById("megoldasokSzama");

    if(D<0){
        megoldasokSzama.innerText = "Megoldások száma: 0";
    }
    else if(D === 0){
        megoldasokSzama.innerText = "Megoldások száma: 1";
        egyMegoldasKiiratasa(a,b);
    }
    else{
        megoldasokSzama.innerText = "Megoldások száma: 2";
        kettoMegoldasKiiratasa(a,b,D);
    }
}
