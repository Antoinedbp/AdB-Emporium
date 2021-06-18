let btnConnect = document.querySelector("#buttonCo");
let divConnect = document.querySelector("#formular");
let header = document.querySelector("header");
let allSec = Array.from(document.querySelectorAll("section"));
let footer = document.querySelector("footer");
let btnClose = document.querySelector(".fermeture");
let btnInscription = document.querySelector("#inscription");
let divInscription = document.querySelector(".divInscription");
let btnConnect2 = document.querySelector("#connect");
let submit = document.querySelector(".submit");
let emailInput = document.querySelector("#mail");
let passInput = document.querySelector("#password");
let passInput2 = document.querySelector("#password2");
console.log(divInscription);

btnConnect.addEventListener("click", () => {

    divConnect.style.display = "block";
    header.style.filter = "blur(10px)";
    allSec.forEach(elem => {
        elem.style.filter = "blur(10px)";
    });
    footer.style.filter = "blur(10px)";

});

btnClose.addEventListener("click", () => {

    divConnect.style.display = "none";
    header.style.filter = "blur(0px)";
    allSec.forEach(elem => {
        elem.style.filter = "blur(0px)";
    });
    footer.style.filter = "blur(0px)";

});

btnInscription.addEventListener("click", () => {
    divInscription.style.display = "flex";
});

btnConnect2.addEventListener("click", () => {
    divInscription.style.display = "none";
});

submit.addEventListener("click", () => {
    if (emailInput.value == "" || passInput.value == "") {
      alert("Veuillez remplir tous les champs obligatoire");  
    }else{
        divConnect.style.display = "none";
        header.style.filter = "blur(0px)";
        allSec.forEach(elem => {
            elem.style.filter = "blur(0px)";
        });
        footer.style.filter = "blur(0px)";
        };
})



export {btnConnect, btnClose, btnInscription, submit};