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

let mydata = document.querySelector('.sp-section')

async function getdata() {
    let data = await fetch('https://fakestoreapi.com/products')

    .then((data)=>data.json())
    .catch((ERR)=>console.log(ERR))

    
        mydata.innerHTML +=`<div class="pro-inf">
        <img src="${data.image}" alt="pro1">
        <h1>${data.title}</h1>
        <h3>Price: ${data.price}EGP</h3>
        <p>Discription</p>
    </div>`

    }
getdata()