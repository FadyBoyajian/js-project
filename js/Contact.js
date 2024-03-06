let bodyy = document.querySelector('nav')
let firstnav = document.querySelector('.nav-bar')
let secnav = document.querySelector('.nav-scroll')

let submit = document.querySelector('.cont-but')
let textone = document.getElementById('text1')
let texttwo = document.querySelector('.texttwo')
var users = []

window.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
    bodyy.classList.remove('nav-bar')
    bodyy.classList.add('nav-scroll')
}else{
    bodyy.classList.add('nav-bar')
    bodyy.classList.remove('nav-scroll')
}
})

submit.addEventListener('click',function () {
    texttwo.innerHTML = '' 
    var user = [textone.value]
    users.push(user)

    cleard()
    displayD()
    
})
function displayD (){
    

    for (let i = 0; i < users.length; i++) {
        texttwo.innerHTML += users[i]
    }
}

function cleard(){
    textone.value = ''
}