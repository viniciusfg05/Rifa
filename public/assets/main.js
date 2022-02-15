//abre e fecha o menu
const nav = document.querySelector('#header .menu')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//quando clicar em um intem do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//***************** */

//Testimonials carousel slider swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: {
    invert: true
  },
  keyboard: true,
  autoplay: {
    delay: 8000
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      setWrapperSize: false
    }
  }
})