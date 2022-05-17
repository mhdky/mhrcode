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

const buttonDaftarIsi = document.querySelector(".button-daftar-isi");
const buttonDaftarIsiI = document.querySelector(".btn-right");
const notifDaftarIsi = document.querySelector(".notif-daftar-isi");
buttonDaftarIsi.addEventListener("click", () => {
    const containerDaftarIsi = document.querySelector(".container-daftar-isi");
    containerDaftarIsi.classList.toggle("container-daftar-isi-show");    
    buttonDaftarIsiI.classList.toggle("btn-right-rotate");
    notifDaftarIsi.style.display = "none";
})