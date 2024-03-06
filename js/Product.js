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


let prodata = document.querySelector('.products-section')

async function getdata() {
    let data = await fetch('https://fakestoreapi.com/products')
    .then(t=>t.json())
    .catch(errr=>console.log('ERR'))
    
    data.map((e)=> {
        prodata.innerHTML +=`<div class="pro-inf">
        <img src="${e.image}" alt="pro1">
        <h1>${e.title}</h1>
        <h3>Price: ${e.price}EGP</h3>
        <p>${e.description}</p>
    </div>
        `
    })
}
getdata()