
function kiiratas()
{
    const eddig = parseInt(document.getElementById("eddig").value);
    const check = document.getElementById("checkbox").checked;
    let leptetes = parseInt(document.getElementById("leptetes").value);
    let eredmeny = document.getElementById("eredmeny");
    eredmeny.innerHTML = "Eredemény: ";

    eredmeny.setAttribute("class", "szinez");
    //eredmeny.removeAttribute("class");


    if(!check){
        leptetes = 1;
    }

    for(let i = 1; i<eddig; i+=leptetes){
        eredmeny.innerHTML += i+ " ";
    }
}

function changeEnable(){
    const check = document.getElementById("checkbox").checked;
    let leptetes = document.getElementById("leptetes");

    if(check){
        leptetes.removeAttribute("disabled");
    }
    else{
        leptetes.setAttribute("disabled",true);
    }
}