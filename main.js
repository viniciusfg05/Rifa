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

document.querySelector('#itens').addEventListener('wheel', event => {
  if (event.deltaY > 0) {
    event.target.scrollBy(300, 0)
  } else {
    event.target.scrollBy(-300, 0)
  }
})
