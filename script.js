// abre e fecha o menu quando clicar no ícone //
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// quando clicar em algum item do menu, escondê-lo //
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

// mudar o header (inserir classe scroll) quando rolar a página //
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {

    if (this.window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

// swiper || carousel
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});


// ScrollReveal
const scrollReveal = ScrollReveal( {
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`, 
    { interval: 100 } 
)

// botão back-to-top
const backToTopButton = document.querySelector('.back-to-top')
function backToTopWhenScroll() {

    if (this.window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

// active menu on the visible section
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
    
    for (let section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}
// eventListeners when Scroll
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTopWhenScroll()
    activateMenuAtCurrentSection()
})
