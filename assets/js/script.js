// const listLi = document.querySelectorAll(".list ul li");
// const line = document.querySelectorAll('.line');
// for(let i = 0; i < listLi.length || i < line.length; i++) {
//     listLi[i].addEventListener("mouseenter", () => {
//         line[i].classList.add("line-show");
//     });

//     listLi[i].addEventListener("mouseleave", () => {
//         line[i].classList.remove("line-show");
//     });
// }

// const searchToShow = document.querySelector(".search-to-show");
// searchToShow.addEventListener("click", () => {
//     const containerSearch = document.querySelector(".container-search");
//     containerSearch.classList.toggle("container-search-show");
// })

// const containerLine = document.querySelector(".container-line");
// containerLine.addEventListener("click", () => {
//     const list = document.querySelector(".list");
//     list.classList.add("list-show");
// });
// const faTimes = document.querySelector(".fa-times");
// faTimes.addEventListener("click", () => {
//     const list = document.querySelector(".list");
//     list.classList.remove("list-show");
// });

// const buttonDown = document.querySelectorAll(".fa-chevron-down");
// const containerContent = document.querySelectorAll(".container-card-content");
// for(let j = 0; j < buttonDown.length || j < containerContent; j++) {
//     buttonDown[j].addEventListener("click", () => {
//         containerContent[j].classList.toggle("container-card-content-show");
//         buttonDown[j].classList.toggle("rotate");
//     })
// }


const openSearch = document.querySelector(".open-search");
openSearch.addEventListener("click", () => {
    const boxSearch = document.querySelector(".box-search");
    boxSearch.classList.toggle("box-search-show")
});

const containerBurgerBtn = document.querySelector(".container-burger-btn");
containerBurgerBtn.addEventListener("click", () => {
    const containerList = document.querySelector(".container-list");
    containerList.classList.add("container-list-show");
});
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
    const containerList = document.querySelector(".container-list");
    containerList.classList.remove("container-list-show");
});

const backToTop = document.querySelector(".container-back-to-top");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
    ) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});