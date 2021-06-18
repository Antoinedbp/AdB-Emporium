let mesIndicateurs = document.querySelectorAll(".indic");
let images = document.querySelectorAll(".img");

let translate = (nbr, translateValue) => {
    images.forEach((elem, index) => {
        elem.style.transform = `translateX(${(index*translateValue)-(nbr*translateValue)}%)`;
    });
};
mesIndicateurs.forEach((elem, index) => {
    elem.addEventListener("click", () => {
        translate(index, 120)
    });
});

export {mesIndicateurs, images};