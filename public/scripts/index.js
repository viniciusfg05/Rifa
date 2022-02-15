const slides = document.querySelectorAll('#carousel__item')
const nextButton = document.querySelector('#buttonNext')
const prevButton = document.querySelector('#buttonPrev')

let currentSlide = 0

//quando clicar em um intem do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
