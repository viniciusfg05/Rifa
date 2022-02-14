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
const NumberChecked = document.querySelectorAll('.Number.checked')

for (const element of Numbers) {
  element.addEventListener('click', function () {
    element.classList.toggle('checked')
  })
}

let data = [
  //Estrutura de dados jobs
  {
    id: 1,
    number: 000
  },
  {
    id: 2,
    number: 001
  },
  {
    id: 3,
    number: 002
  },
  {
    id: 4,
    number: 003
  },
  {
    id: 5,
    number: 004
  }
]

function enviar() {
  console.log(data)
}
