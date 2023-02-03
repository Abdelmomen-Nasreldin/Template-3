// increase numbers in stats section
const statsSection = document.querySelector("#statsSection");
const statsCards = statsSection.querySelectorAll("#statsSection .card h3");


function statsCounter(ele) {
    let counter = 0;
    let countUpToNumber = ele.textContent;
    ele.textContent = 0;
    let timer = setInterval(() => {
        if (counter >= countUpToNumber) {
            clearInterval(timer)
        }
        ele.textContent = counter++;
    }, 3500 / countUpToNumber)
}

function scrollToStates() {
    if (window.scrollY >= statsSection.offsetTop - 100) {
        statsCards.forEach(card => {
            statsCounter(card)
        })
        window.removeEventListener("scroll", scrollToStates)
    }
}
window.addEventListener("scroll", scrollToStates)

// another solution to states scroll

// for (let i = 0; i < statsCards.length; i++) {
//     let counter = 0;
//     const numbersBox = statsCards[i];
//     const numbersBoxValue = parseInt(numbersBox.textContent);
//     numbersBox.textContent = 0;

//     window.addEventListener("scroll", () => {
//         if (window.scrollY >= statsSection.offsetTop - 100) {
//             if (parseInt(numbersBox.textContent) < numbersBoxValue) {
//                 let timer = setInterval(() => {
                   
//                     if (parseInt(numbersBox.textContent) >= numbersBoxValue) {
//                         clearInterval(timer);
//                     }else{
//                         numbersBox.textContent = counter++;
//                     }

//                 }, 3500/numbersBoxValue);
//             }
//         }
//     });
// }

// another solution to states scroll

// let indicator = false;
// window.addEventListener("scroll", () => {
//     if (indicator) {
//         return;
//     }
//     if (window.scrollY >= statsSection.offsetTop - 100) {
//         statsCards.forEach(card => {
//             statsCounter(card)
//         })
//         indicator = true;
//     }
// })