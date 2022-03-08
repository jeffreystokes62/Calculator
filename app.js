function add(a) {
    console.log(Array.from(arguments).reduce((a,b)=>a+b))
}

function subtract(a) {
    console.log(Array.from(arguments).reduce((a,b)=>a-b))
}

function multiply(a) {
    console.log(Array.from(arguments).reduce((a,b)=>a*b))
}

function divide(a) {
    console.log(Array.from(arguments).reduce((a,b)=>a/b))
}

function operate(operator, x,y) {
    switch(operator) {
        case '+':
          return add(x,y)
        case '-':
          return subtract(x,y)
        case '*':
          return multiply(x,y)
        case '/':
          return divide(x,y)
        default:
          console.log('Invalid operator')
      }
}

const wrapper = document.getElementsByClassName('calculator')[0]
const answerBox = document.querySelector('.answer >p')


wrapper.addEventListener('click', (event) => {
  const operator = event.target.classList.value.includes('operator')
  const isNumber = event.target.classList.value.includes('number')
  const decimal = event.target.classList.value.includes('decimal')
  const calc = event.target.classList.value.includes('calc')
  const clr = event.target.classList.value.includes('clr')

  
  if (isNumber || decimal) {
    if (answerBox.textContent == 0) {
      answerBox.textContent = event.target.textContent
      return
    }
    if (answerBox.textContent.includes(".") && event.target.textContent == '.') {
      return;
    }
      answerBox.textContent =  answerBox.textContent + event.target.textContent
    }
    if (clr) {
    answerBox.textContent = 0
    }
  
})


