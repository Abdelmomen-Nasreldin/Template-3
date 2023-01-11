const toggleIcon = document.getElementById("icon");
const mainNavList = document.getElementById("mainNav");
const welcomeSection = document.getElementById("welcomeSection");
const otherLinks = document.getElementById("showMegaMenu");
const megaMenu = document.getElementById("megaMenu");

toggleIcon.addEventListener("click", toggleNavMenu);
welcomeSection.addEventListener("click", hideNavMenu);

[otherLinks, megaMenu].forEach((item) => {
    item.addEventListener("mouseover", showMegaMenu);
    item.addEventListener("mouseleave", hideMegaMenu);
});

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

// fetching data ///////////////////////
const fetchFun = async () => {
    try {
        const response = await fetch("./js/data.json");

        if (response.status !== 200) {
            throw new Error("can't fetch data.");
        }
        const data = await response.json();

        const articleContainer = sectionContainerHandler("articleSection")
        const featuresContainer = sectionContainerHandler("featuresSection")
        const testimonialsContainer = sectionContainerHandler("testimonialsSection")
        const teamMembersContainer = sectionContainerHandler("teamMembersSection")
   
        elementDataHandler(articleContainer, data[0].articleData);
        elementDataHandler(featuresContainer, data[2].featuresData);
        elementDataHandler(testimonialsContainer, data[3].testimonialsData);
        elementDataHandler(teamMembersContainer, data[4].teamMembersData);

    } catch (err) {
        console.log("error: ", err.message);
    }
}

fetchFun();

function sectionContainerHandler(sectionId) {
    const sectionContainer = document.querySelector(`#${sectionId} .cards-container`)
    return sectionContainer
}

function elementDataHandler(ParentElement, source) {
    const element = ParentElement.querySelector(".card-template");

    for (let obj of source) {
        const card = document.importNode(element.content, true);
        obj.imgSrc
            ? (card.querySelector("img").src = `../img/${obj.imgSrc}`)
            : (card.querySelector("img").src = "../img/welcome-image.png");

        obj.id
            ? (card.querySelector(".card").id = obj.id)
            : (card.querySelector(".card").id = Math.random());

        obj.title
            ? (card.querySelector(".content h3").innerText = obj.title)
            : (card.querySelector(".content h3").innerText = "Default Title");

        obj.desc
            ? (card.querySelector(".content p").innerText = obj.desc)
            : (card.querySelector(".content p").innerText =
                "the text is not found so you see the default one");

        ParentElement.append(card);
    }
}
