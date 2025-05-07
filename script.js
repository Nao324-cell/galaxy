// Пожалуйста, не меняй код ниже. Он необходим для правильной настройки позиционирования элементов :)
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

// Функция, которую нужно вызвать при клике на стрелку
function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

function header(){
    let head = document.querySelector("header")
    head.style.background = "url(/uploads/2022/11/bg_space.png)"
}
// Исправь ошибки, допущенные при обработке события
let button = document.querySelector('.arrow-next')
button.addEventListener("click", scrollDown)

let night = document.querySelector(".switch-theme-button")
night.addEventListener("click", header)

function calc_flight(){
    let result= day * cabin
    alert(result)
}

let for_day = document.querySelector('.days-input')
let day = for_day.querySelector('placeholder')
let for_cabin = document.querySelector("select")
let cabin = for_cabin.querySelector(".value")

let cost = document.querySelector(".submit-btn-calc")
cost.addEventListener('click', calc_flight)


function background_button(){
    bg_color.style.background = "#C2AB99"
}
function button_background(){
    bg_color.style.background ="transparent"
}

let bg_color = document.querySelector(".submit-btn-send")

let send = document.querySelector(".submit-btn-send")
send.addEventListener('mouseleave', background_button)
send.addEventListener('mouseenter', button_background)
