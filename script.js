let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

tabLinks.forEach((tab) => {
    tab.addEventListener("click", () => {

        tabLinks.forEach(link => link.classList.remove("active-links"));
        tabContents.forEach(content => content.classList.remove("active-tab"));

        tab.classList.add("active-links");

        let target = tab.getAttribute("data-tab");
        document.getElementById(target).classList.add("active-tab");
    });
});

let sideMenu = document.getElementById("side-menu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}