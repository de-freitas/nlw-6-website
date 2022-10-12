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

function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

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
    keyboard: true
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
function backToTopWhenScroll() {
    const backToTopButton = document.querySelector('.back-to-top')

    if (this.window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

// eventListeners when Scroll
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTopWhenScroll()
})
