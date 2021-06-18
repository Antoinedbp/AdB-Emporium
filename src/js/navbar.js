let navL = document.querySelector("#navL");
let nav = document.querySelector(".maNav");
let logo = document.querySelector(".tit");
let monH1 = document.querySelector("h1");

window.addEventListener("scroll", () => {

    if (window.pageYOffset >= '10') {

        navL.classList.add("fixed-top");
        navL.classList.remove("flex-column");
        navL.classList.add("justify-content-between");
        nav.style.marginTop = "0rem";
        logo.style.fontSize = "4rem";
        navL.style.height = "10rem";

    }else{

        navL.classList.remove("fixed-top");
        navL.classList.add("flex-column");
        navL.classList.remove("justify-content-between");
        nav.style.marginTop = "2rem";
        logo.style.fontSize = "2rem";
        navL.style.height = "10rem";
        monH1.style.marginTop = "2rem";

    };
});

export {navL};