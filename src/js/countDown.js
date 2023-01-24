let dateToEvent = new Date("1 March 2023").getTime(); // from 1970 to 1/2/23

const daysCard = document.querySelector("#days-card h3")
const hoursCard = document.querySelector("#hours-card h3")
const minutesCard = document.querySelector("#minutes-card h3")
const secondsCard = document.querySelector("#seconds-card h3")
setInterval(() => {
    let dateNow = new Date().getTime(); // from 1970 to today
    let counterDiff = dateToEvent - dateNow; // from today to 1/2/2023

    let days = Math.floor(counterDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((counterDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Modulus of days / (1000 * 60 * 60) 
    let minutes = Math.floor((counterDiff % (1000 * 60 * 60)) / (1000 * 60)); // Modulus of hours / (1000 * 60)
    let seconds = Math.floor((counterDiff % (1000 * 60)) / (1000)); // Modulus of minutes / (1000)

    daysCard.innerHTML = days;
    hoursCard.innerHTML = hours;
    minutesCard.innerHTML = minutes;
    secondsCard.innerHTML = seconds;

}, 1000)
