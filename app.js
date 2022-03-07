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
          add(x,y)
          break;
        case '-':
          subtract(x,y)
          break;
        case '*':
          multiply(x,y)
          break;
        case '/':
          divide(x,y)
          break;
        default:
          console.log('Invalid operator')
      }
}

