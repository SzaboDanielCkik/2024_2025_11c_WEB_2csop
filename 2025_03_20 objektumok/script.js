//rendszám, tulaj, km, szín
// const autoRendszam = "HH-II-125";
// const autoTulaj = "Kis Pista";
// const autoKm = 123456;
// const autoSzin = "piros";

const auto = {
    rendszam: "HH-II-125",
    tulaj: "Kis Pista",
    km: 123456,
    szin: "Zöld"
}

console.log(auto);
auto.tulja = "Pista Kis";
console.log(auto.tulaj);
console.log(auto);
//console.log(auto["tulaj"]);

const auto2={    
    rendszam: "HH-II-126",
    tulaj: "Kis Juli",
    km: 123457,
    szin: "piros"
}
console.log(auto2);
auto2.tulajLeanykoriNeve= "Nagy Julia";
console.log(auto2);

const autosok = [];
autosok.push(auto);
autosok.push(auto2);
console.table(autosok);

const diakok = [
    {
        om: "789456123",
        nev: "Jani",
        haviAtlagok: [4.6,3.7,4.0,4.1,3.1,3.5,3.6]
    },  
    {
        om: "789456124",
        nev: "Csilla",
        haviAtlagok: [4.6,4.7,4.2,4.3,4.3,4.0,3.9]
    }
]

console.log(diakok[1].haviAtlagok[1]);
