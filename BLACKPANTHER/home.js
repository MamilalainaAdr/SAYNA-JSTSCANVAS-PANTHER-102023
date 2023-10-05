const h1 = document.querySelector ('h1')
const bouton = document.getElementById('defiler')
const slider = document.getElementById ('slider')
let images = document.getElementById('slider').querySelectorAll ('img');
let conteneurs = document.getElementById ('slider').querySelectorAll ('.conteneur')

function sliding (){
    const slides = document.querySelectorAll (".slide");
    for (let i = 0; i < slides.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = slides[i].getBoundingClientRect().top;
        var elementVisible = 400;  
        
        if (elementTop < windowHeight - elementVisible ) {
            slides[i].classList.add ("active2");
        }
    }
    
}

window.addEventListener ("scroll", sliding);

sliding ();

let slideInit = 590
let slide = 590
bouton.addEventListener ("click", defiler)

function sleep (ms){
    return new Promise (resolve => setTimeout (resolve, ms));
}

let etape = 0
async function defiler (){
    images[etape].classList.remove ('zoom')
    images[etape + 1].classList.add ('zoom')


    if (etape == 8) {
        slider.style.transform = "translate(0px)"
        etape = 0;
        slide = slideInit
        images.forEach(function (image){
            image.classList.remove ('zoom')
        })
        images[0].classList.add ('zoom')
    }
    else{
        slider.style.transform = "translate(-"+slide+"px)"
        slide += slideInit
        etape ++
    }
    
}