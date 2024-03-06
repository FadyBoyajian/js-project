let bodyy = document.querySelector('nav')
let firstnav = document.querySelector('.nav-bar')
let secnav = document.querySelector('.nav-scroll')

window.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
    bodyy.classList.remove('nav-bar')
    bodyy.classList.add('nav-scroll')
}else{
    bodyy.classList.add('nav-bar')
    bodyy.classList.remove('nav-scroll')
}
})

let namee = document.getElementById('nm')
let lnamee = document.getElementById('ln')
let pass =document.getElementById('pw')
let repass = document.getElementById('rpw')
let submit = document.querySelector('.sub')
let tbody = document.querySelector('tbody')

dataarray = []

submit.addEventListener('click', function(){
    var user = {
        name: namee.value,
        sirname: lnamee.value,
        password: pass.value,
        passwordtwo: repass.value,

    }
    dataarray.push(user)
    cleardata()
    displaydata()
    console.log(dataarray);
})

function displaydata(){

    tbody.innerHTML =''

    for (let i = 0; i < dataarray.length; i++) {
        tbody.innerHTML += `<tr>
        <td>${dataarray[i].name}</td>
        <td>${dataarray[i].sirname}</td>
        <td>${dataarray[i].password}</td>
        <td>${dataarray[i].passwordtwo}</td>
    </tr>`
    }
}

function cleardata (){
namee.value = ''
lnamee.value = ''
pass.value = ''
repass.value = ''
}
