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

function feladat3(adatok){
    
}

function main(szoveg){
    const adatok = szovegFeldolgoz(szoveg);
    //console.log(adatok);
    feladat2(adatok);
    feladat3(adatok);
}

main(szoveg);