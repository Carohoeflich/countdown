const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const patchDate = document.querySelector('.patch-date');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.example h4');

let finalDate = new Date(2022,7,30,3,00,0); // set the actual date as variables
let currentTime = new Date();

const year = finalDate.getFullYear();

//get the month name from the array
let month = finalDate.getMonth();
month = months[month];

//get the day name from the array
let day = finalDate.getDay();
day = weekdays[day];

const date = finalDate.getDate();
const hours = finalDate.getHours();
const minutes = finalDate.getMinutes();
const seconds = finalDate.getSeconds();

patchDate.textContent = `6.2 Patch arrives on ${day}, ${date} ${month} of ${year} at ${hours}:${minutes}0am`;


//working in milliseconds
let futureTime = finalDate.getTime();

function getRemainingTime(){
let today = new Date().getTime();
let t = futureTime - today;

let oneDay = 24*60*60*1000;
let oneHour = 60*60*1000;
let oneMinute = 60*1000;

let days = t/oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay)/oneHour);
let minutes = Math.floor((t%oneHour)/oneMinute)
let seconds = Math.floor((t%oneMinute)/1000)

const values =[days,hours,minutes,seconds]

function format(item){
    if(item < 10){
        return item = `0${item}`
    }
    return item
}

items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
});

//when countdown reaches final date established
if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> Countdown reached 0</h4>`
};
}

//countdown
let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();