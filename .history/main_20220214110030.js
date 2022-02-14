const slides = document.querySelectorAll('#carousel__item')
const nextButton = document.querySelector('#buttonNext')
const prevButton = document.querySelector('#buttonPrev')

let currentSlide = 0

nextButton.addEventListener('click', () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }

  slides.forEach(slide => {
    slide.classList.remove('carousel__item--visible')
  })

  slides[currentSlide].classList.add('carousel__item--visible')
})

prevButton.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1
  } else {
    currentSlide--
  }

  slides.forEach(slide => {
    slide.classList.remove('carousel__item--visible')
  })

  slides[currentSlide].classList.add('carousel__item--visible')
})

//////////////////////////////////////

const NumberSelects = document.querySelector('.SelectNumbers')
const Numbers = document.querySelectorAll('.Number')

let numb = element.classList.length

Numbers.forEach(Numero => {
  document.addEventListener('click', function () {
    Numero.classList.toggle('checked')
  })

  // Numero.classList.add('chekend')
})

let currentSlide = 0

Numbers.addEventListener('click', () => {
  if (currentSlide === Numbers.length - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }

  Numbers.forEach(numero => {
    numero.classList.toggle('oi')
  })
})
