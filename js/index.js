const toggleIcon = document.getElementById("icon");
const mainNavList = document.getElementById("mainNav");
const welcomeSection = document.getElementById("welcomeSection");
const otherLinks = document.getElementById("showMegaMenu");
const megaMenu = document.getElementById("megaMenu");

toggleIcon.addEventListener("click", toggleNavMenu);
welcomeSection.addEventListener("click", hideNavMenu);
otherLinks.addEventListener("mouseover", showMegaMenu);
otherLinks.addEventListener("mouseleave", hideMegaMenu);
megaMenu.addEventListener("mouseover", showMegaMenu);
megaMenu.addEventListener("mouseleave", hideMegaMenu);
function toggleNavMenu() {
    mainNavList.classList.toggle("show");
}
function showMegaMenu() {
    megaMenu.style.display = "flex";
}
function hideMegaMenu() {
    megaMenu.style.display = "none";
}
function hideNavMenu() {
    mainNavList.classList.remove("show");
}