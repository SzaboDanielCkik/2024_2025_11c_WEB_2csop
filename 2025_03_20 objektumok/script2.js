//console.log(adatok);
// sorszam, szavazatok, veznev, kernev, part

function szovegDarabol(szoveg, karakter){
    let darabok = [];
    let text = "";
    for(let i = 0; i<szoveg.length; i++){
        if(szoveg[i] !== karakter){
            text += szoveg[i];
        }
        else{
            darabok.push(text);
            text = "";
        }
    }
    darabok.push(text);
    return darabok;
}

function szovegFeldolgoz(szoveg){
    const tomb = szovegDarabol(szoveg, ";");
    //console.log(tomb);
    let adatok = [];
    for(let i = 0; i<tomb.length; i++){
        const st = szovegDarabol(tomb[i], " ");
        adatok.push({
            korzet: parseInt(st[0]),
            szavazatok: parseInt(st[1]),
            veznev: st[2],
            kernev: st[3],
            part: st[4]
        });
    }
    return adatok;
}

function feladat2(adatok){
    console.log("2. feldat:");
    console.log(`A helyhatósági választáson ${adatok.length} képviselőjelölt indult.`);
}

function VanEAdottNevIndex(adatok,vnev, knev){
    let i = 0;
    while(i<adatok.length && !(adatok[i].veznev===vnev && adatok[i].kernev===knev)){
        i++;
    }
    if(i>=adatok.length){
        return -1;
    }
    else{
        return i;
    }
}

function feladat3(adatok){
    // const nev = "Ablak Antal";
    const vnev = "Ablak";
    const knev = "Antal";
    const index = VanEAdottNevIndex(adatok,vnev, knev);
    if(index>=0){
        const adat = adatok[index];
        console.log(`${adat.veznev} ${adat.kernev} - ${adat.szavazatok} szavazatot kapott!`);
    }
    else{
        console.log("Ilyen nevű képviselőjelölt nem szerepela nyilvántartásban!");
    }


}

function main(szoveg){
    const adatok = szovegFeldolgoz(szoveg);
    //console.log(adatok);
    feladat2(adatok);
    feladat3(adatok);
}

main(szoveg);