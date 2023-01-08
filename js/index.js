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
const cardsContainer = document.querySelector(
    "#articleSection .cards-container"
);
fetch("./js/data.json")
    .then((response) => response.json())
    .then((data) => {
        const articleContainer = document.querySelector(
            "#articleSection .cards-container"
        );

        elementDataHandler(articleContainer, data.articleData);
    })
    .catch((err) => {
        console.log(err);
    });

function elementDataHandler(ParentElement, source) {
    const element = ParentElement.querySelector(".card-template");

    for (let obj of source) {
        const card = document.importNode(element.content, true);
        console.log(card);
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

let teamMembersData = [
    {
        imgSrc: "team-01.jpg",
        title: "Hady",
        desc: "great hard worker",
    },
    {
        imgSrc: "team-02.jpg",
        title: "Momen",
        desc: "great hard worker",
    },
    {
        imgSrc: "team-03.jpg",
        title: "Ahmed",
        desc: "great hard worker",
    },
    {
        imgSrc: "team-04.jpg",
        title: "Mohamed",
        desc: "Manager",
    },
    {
        imgSrc: "team-05.png",
        title: "Esraa",
        desc: "Secretary",
    },
    {
        imgSrc: "team-06.png",
        title: "Saleh",
        desc: "great hard worker",
    },
    {
        imgSrc: "team-07.jpg",
        title: "Hadeer",
        desc: "great hard worker",
    },
    {
        imgSrc: "team-08.jpg",
        // title: "Hady",
        // desc: "great hard worker"
    },
];
let testimonialsData = [
    {
        imgSrc: "avatar-01.png",
        title: "Momen",
        desc: "Front-end Developer",
    },
    {
        imgSrc: "avatar-02.png",
        title: "Hady",
        desc: "Full-stack Developer",
    },
    {
        imgSrc: "avatar-03.png",
        title: "Saleh",
        desc: "Full-stack Developer",
    },
    {
        imgSrc: "avatar-04.png",
        title: "Mohamed",
        desc: "Manager",
    },
    {
        imgSrc: "avatar-05.png",
        title: "Mostafa",
        desc: "Assistant",
    },
    {
        imgSrc: "avatar-06.png",
        title: "Hesham",
        desc: "Assistant",
    },
];
let featuresData = [
    {
        imgSrc: "features-01.jpg",
        title: "Quality",
        // desc: "great hard worker"
    },
    {
        imgSrc: "features-02.jpg",
        title: "Control",
        // desc: "great hard worker"
    },
    {
        imgSrc: "features-03.jpg",
        title: "Fast",
        // desc: "great hard worker"
    },
];
let galleriesData = [
    {
        imgSrc: "gallery-01.png",
    },
    {
        imgSrc: "gallery-02.png",
    },
    {
        imgSrc: "gallery-03.png",
    },
    {
        imgSrc: "gallery-04.png",
    },
    {
        imgSrc: "gallery-05.jpg",
    },
    {
        imgSrc: "gallery-06.png",
    },
];

const testimonialsContainer = document.querySelector(
    "#testimonialsSection .cards-container"
);
const teamMembersContainer = document.querySelector(
    "#teamMembersSection .cards-container"
);
const featuresContainer = document.querySelector(
    "#featuresSection .cards-container"
);
elementDataHandler(teamMembersContainer, teamMembersData);
elementDataHandler(testimonialsContainer, testimonialsData);
elementDataHandler(featuresContainer, featuresData);
