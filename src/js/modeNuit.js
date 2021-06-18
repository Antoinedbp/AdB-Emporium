let modeJour = document.querySelector("#day");
let modeNuit = document.querySelector("#night");

modeNuit.addEventListener("click", () => {

    let whiteMode = document.querySelectorAll(".bg-white");
    let whiteTxt = document.querySelectorAll(".text-dark");
    let whiteIndic = document.querySelectorAll(".indic");

    whiteMode.forEach(elem => {

        elem.classList.remove("bg-white");
        elem.classList.add("bg-dark");

    });

    whiteTxt.forEach(elem => {

        elem.classList.remove("text-dark");
        elem.classList.add("text-white");

    });

    whiteIndic.forEach(elem => {

        elem.style.border = "1px solid white";

    });
});

modeJour.addEventListener("click", () => {

    let darkMode = document.querySelectorAll(".bg-dark");
    let darkTxt = document.querySelectorAll(".text-white");
    let darkIndic = document.querySelectorAll(".indic");

    darkMode.forEach(elem => {

        elem.classList.remove("bg-dark");
        elem.classList.add("bg-white");

    });

    darkTxt.forEach(elem => {

        elem.classList.remove("text-white");
        elem.classList.add("text-dark");

    });

    darkIndic.forEach(elem => {

        elem.style.border = "1px solid black";

    });
});

export {modeJour, modeNuit};