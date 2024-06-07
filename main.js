
const Premisia = document.getElementById("Premisia");

const Descripcion = document.getElementById("Descripcion");

const Genero = document.getElementById("Genero")

//output
const PremisiaOutput = document.getElementById("PremisiaOutput");

const DescripcionOutput = document.getElementById("DescripcionOutput");

const GeneroOutput = document.getElementById("GeneroOutput")

//urlParams

const urlParams=  new URLSearchParams(window.location.search);
const PremisiaURL= urlParams.get("Premisia");
const DescripcionURL= urlParams.get("Descripcion");
const GeneroURL = urlParams.get("Genero");

//en caso de que no se use el from de abajo

PremisiaOutput.innerText =  PremisiaURL || "Ponlo en la url con el name de Premisia";

DescripcionOutput.innerText =  DescripcionURL || "Ponlo en la url con el name de Descripcion";

GeneroOutput.innerText =  GeneroURL || "Ponlo en la url con el name de Genero";




//botton

const btn1 =  document.getElementById("btn1") 
function func(){
    PremisiaOutput.innerHTML = Premisia.value;
    DescripcionOutput.innerHTML= Descripcion.value;
    GeneroOutput.innerHTML=Genero.value;
}

btn1.addEventListener("click", func)