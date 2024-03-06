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


let soraB = document.querySelector('.big-img img')
let soraS = document.querySelectorAll('.small-imgs img')

soraS.forEach((q) => {
    q.addEventListener('click',function () {
        soraB.src = q.src
    })

})

let bundle = [
    {
        sora: './images/interval1.jpg',
        enwan: 'FB stiches',
        kalam: 'Customise your own bean bag by  your favourite colour, fabric and you can even mix colours.',
    },
    {
        sora: './images/mandala.jpg',
        enwan: 'FB Beddings',
        kalam: 'Each bean bag is made from imported materials and sewn with double stitch of six twine thread',
    },
    {
        sora: './images/interval2.jpg',
        enwan: 'FB Bean bag chairs',
        kalam: 'We guarantee all products against sewing and fabric quality.',
    }
]
const soraa = document.querySelector('.int-img')
const etch = document.querySelector('.enwann')
const pee = document.querySelector('.kalamm')

let x = 0
setInterval(() => {
        soraa.src = bundle[x].sora
        etch.innerHTML = bundle[x].enwan
        pee.innerHTML = bundle[x].kalam
        x++
        if (x >= bundle.length) {
            x = 0
        }
    }
, 3000);
