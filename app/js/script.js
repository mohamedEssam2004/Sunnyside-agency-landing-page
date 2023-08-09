const menuLinks = document.getElementById("menu");
const menuBtn = document.getElementById("btn");

menuBtn.addEventListener("click", () => {
    menuLinks.classList.toggle("close");
});