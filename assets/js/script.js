// back to top program
// back to top program
// back to top program
const backToTop = document.querySelector(".container-btn-top");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        backToTop.style.display = "flex";
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