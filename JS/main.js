
let mainProgBarSpan = document.querySelector(".scroll-bar span")

let skillsSection = document.querySelector(".our-skills");
let skillSpans = Array.from(document.querySelectorAll(".our-skills .prog-span"));
let percentSpans = Array.from(document.querySelectorAll(".our-skills .percentage-span"));

let stats_Section = document.querySelector(".stats")
let nums = document.querySelectorAll(".stats .unit p")
let started = false;


let scrollToTop = document.querySelector(".scroll-to-top");

let state = [true,true,true,true,true,true,true,true,true,true,true];

window.addEventListener("scroll" , () => {
    if (window.scrollY == 0){
        state = [true,true,true,true,true,true,true,true,true,true,true];
    }
    let mainTitle = Array.from(document.querySelectorAll(".main-title"))
    let maxScroll = window.scrollY +125;
    let minScroll = window.scrollY;
    for (let i=0 ; i < mainTitle.length ; i++){
            if(maxScroll >= mainTitle[i].offsetTop && mainTitle[i].offsetTop >= minScroll){
                if(state[i]){
                mainTitle[i].classList.add("play")
                setTimeout(function (){
                    mainTitle[i].classList.remove("play")
                },1200)
                }
                state[i] = false;
            }
    }


    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    mainProgBarSpan.style.width = ` ${ (scrollTop / height ) * 100 }% `;

    if (window.scrollY >= skillsSection.offsetTop - 100){
        for (let i =0 ; i<percentSpans.length ; i++){
            percentSpans[i].innerHTML = skillSpans[i].dataset.width
                }

        skillSpans.forEach((span) => {
            span.style.width = span.dataset.width
                })
    }

    if(window.scrollY >= stats_Section.offsetTop - 100){
    if (!started) {
        nums.forEach((num) => startCount(num));
    }
    started = true;
        }

    window.scrollY >= 695 ? scrollToTop.classList.add("show") : scrollToTop.classList.remove("show") ;
})

function startCount(el) {
let goal = el.dataset.value;
let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
    clearInterval(count);
    }
}, 1000 / goal);
}

let specificDate = new Date("31 dec 2025 23:59:59").getTime()
let countDown = setInterval(() => {

    let currentDate = new Date().getTime();

    let timeleft = specificDate - currentDate

    let days = Math.floor(timeleft/(1000 * 60 * 60 * 24))

    let hours = Math.floor( (timeleft%(1000 * 60 * 60 * 24))/(1000*60*60) )
    hours < 10 ? hours = `0${hours}`: hours
    let minutes = Math.floor( (timeleft%(1000 * 60 * 60))/(1000*60) )
    minutes < 10 ? minutes = `0${minutes}`: minutes
    let seconds = Math.floor( (timeleft%(1000 * 60))/(1000) )
    seconds < 10 ? seconds = `0${seconds}`: seconds

    document.querySelector(".days").innerHTML = days
    document.querySelector(".hours").innerHTML = hours
    document.querySelector(".minutes").innerHTML = minutes
    document.querySelector(".seconds").innerHTML = seconds
    
    if (timeleft < 0) {
    clearInterval(counter);
    }
},1000)


scrollToTop.addEventListener("click" , () => {

    window.scrollTo({
        top : 0,
        behavior : "smooth",
    })
})



