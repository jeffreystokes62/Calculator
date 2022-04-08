const wrapper = document.getElementsByClassName('calculator')[0]
const answerBox = document.querySelector('.inner >p')

function add(a) {
    // console.log(Array.from(arguments).reduce((a,b)=>a+b))
    answerBox.textContent = Array.from(arguments).reduce((a,b)=>a+b).toFixed(4)
}

function subtract(a) {
    // console.log(Array.from(arguments).reduce((a,b)=>a-b))
    answerBox.textContent = Array.from(arguments).reduce((a,b)=>a-b).toFixed(4)
}

function multiply(a) {
    // console.log(Array.from(arguments).reduce((a,b)=>a*b))
    answerBox.textContent = Array.from(arguments).reduce((a,b)=>a*b).toFixed(4)
}

function divide(a) {
    // console.log(Array.from(arguments).reduce((a,b)=>a/b))
    answerBox.textContent = Array.from(arguments).reduce((a,b)=>a/b).toFixed(4)
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


let entering = false;
let reset = false;
const firstArg = []
const operatorUsed = []

wrapper.addEventListener('click', (event) => {
  const operator = event.target.classList.value.includes('operator')
  const isNumber = event.target.classList.value.includes('number')
  const decimal = event.target.classList.value.includes('decimal')
  const calc = event.target.classList.value.includes('calc')
  const clr = event.target.classList.value.includes('clr')

  const invert = event.target.classList.value.includes('invert')
  const percent = event.target.classList.value.includes('percent')


  if (clr) {
    answerBox.textContent = 0
    entering = false
    firstArg.pop()
    operatorUsed.pop()
    }

  if (answerBox.clientWidth > 260) {
      return
  }
    

  if (isNumber || decimal) {
    
    if (reset) {
      answerBox.textContent = ''
      reset = false
    }

     if (!reset) {
      if (answerBox.textContent == 0) {
        answerBox.textContent = event.target.textContent
        return
      }
      if (answerBox.textContent.includes(".") && event.target.textContent == '.') {
        return;
      }
        answerBox.textContent =  answerBox.textContent + event.target.textContent
      }
     }
    
    if (operator) {
      if (entering) {
        let second = Number(answerBox.textContent)
        operate(operatorUsed[0],Number(firstArg[0]),second)
        firstArg.pop()
        operatorUsed.pop()
      }
      entering = true;
      reset = true;
      firstArg.push(answerBox.textContent)
      operatorUsed.push(event.target.textContent)
    }

    if (calc) {
      let second = Number(answerBox.textContent)
      operate(operatorUsed[0],Number(firstArg[0]),second)
      firstArg.pop()
      operatorUsed.pop()
    }

    if (invert) {
      answerBox.textContent = (-1*(Number(answerBox.textContent))).toString()
    }

    if (percent) {
      divide(Number(answerBox.textContent),100)
    }
  
})


