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

// if (!NumberChecked) {
//   console.log('Sem a class')
// } else {
//   console.log('Abrir modal')
// }

console.log(NumberChecked)

NumberChecked.forEach(slide => {
  slide.console.log(length)
})

var arrayMarcas = ['Ford', 'BMW', 'Fiat', 'Audi', 'Volkswagen']
arrayMarcas.forEach((marca, indice) => {
  console.log('A marca ' + marca + ' corresponde ao índice: ' + indice)
  if (marca === 'BMW') {
    let itemExcluido = arrayMarcas.shift()
    console.log('Excluímos o elemento ' + itemExcluido)
  }
})
