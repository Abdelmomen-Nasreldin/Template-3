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
// let articleData = [];
// fetching data ///////////////////////
const cardsContainer = document.querySelector("#articleSection .cards-container");
fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data.articleData);
        getCardsDataHandler(data.articleData, cardsContainer, elementDataHandler)
    })
    .catch((err) => {
        console.log(err);
    });

 

function getCardsDataHandler(data, dataContainer, innerDataFun) {
    for (const elementData of data) {
        const card = document.createElement("div");   
        card.id = elementData.id;
        innerDataFun(card ,elementData)
        dataContainer.append(card);
    }
    console.log("done");
}

function elementDataHandler(element, data){
    element.classList.add("card");
    element.innerHTML = `
    <div class="image">
        <img src="${data.src}" alt="card Image">
    </div>
    <div>
        <div class="text">
            <h3>${data.title}</h3>
            <p>${data.text}</p>
        </div>

        <button class="read-more">
            <span>Read More</span>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    </div>
    `
}