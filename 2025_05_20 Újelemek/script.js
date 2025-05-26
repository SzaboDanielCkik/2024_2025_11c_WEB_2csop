
function ujKepLetrehozasas(){
    const container = document.getElementById("container");

    const ujKep = document.createElement("img");
    //ujKep.src = "dog4.jpg";
    ujKep.setAttribute("src","dog4.jpg");
    ujKep.style.width = "200px";
    container.appendChild(ujKep);

}

function kepTorlese(){
    const kep = document.querySelector("img");
    kep.remove();
}

function kepValtas(){
    const kep = document.querySelector("img");
    kep.setAttribute("src","dog1.jpg");
}

function main(){
    const container = document.getElementById("container");

    const ujBekezdes = document.createElement("p");
    ujBekezdes.innerText = "Új bekezdés";

    container.appendChild(ujBekezdes);
}

main();