console.log("JS file added!")

const region = "China"

if (region === "Canada") {
  console.log("You are seeing Canadian version of this site")
}

let price = 20
const shippingFee = 15
let cartTotal

if (price >= 50) {
  cartTotal = price
} else {
  cartTotal = price + shippingFee
}

document.getElementById("cart1").innerHTML += "Your cart total is " + cartTotal

//reassigning the price
price = 105
const discount = 0.15

if (price >= 100) {
  cartTotal = price - (price * discount)
} else if (price >= 50) {
  cartTotal = price
} else {
  cartTotal = price + shippingFee
}
console.log(cartTotal)

document.getElementById("cart2").innerHTML += "Your cart total is " + cartTotal

/* Switch */

let planet = "Saturn"
let message

switch (planet) {
  case "Earth":
    message = "Welcome to the third planet!"
    break
  case "Mars":
    message = "Welcome to the red planet!"
    break
  case "Jupiter":
    message = "Welcome to the largest planet!"
    break
  default:
    message = `You are on ${planet}. We do not service ${planet} yet!`
}

document.getElementById("planet").innerHTML += message

// Switch EX 2 with stacking cases
let answer = "d"

switch (answer) {
  case "a":
  case "b":
  case "d":
    document.getElementById("quiz").innerHTML += "Incorrect answer, please try again"
    break
  case "c":
    document.getElementById("quiz").innerHTML += "Perfect, you got it right!"
}

/* Functions */

function myName () {
  return "Abhay"
}
let firstName = myName()

document.querySelector(".container h1").innerHTML += " " + firstName

function changeBg (bgColor) {
  document.querySelector("body").style.backgroundColor = bgColor
  // to test this function go to the console and type changeBg("cyan")
}

function textResize (newFontSize) {
  document.querySelector('html').style.fontSize = newFontSize
}

// Calculator
function calculator (a, b, operator) {
  let result
  switch (operator) {
    case "add":
      result = a + b
      break
    case "sub":
      result = a - b
      break
    case "multi":
      result = a * b
      break
    case "div":
      result = a / b
      break
    default:
      result = "I do not understand!"
  }
  return result
}

console.log(calculator(34, 56, "multi"))
console.log(calculator(908, 57.87, "sub"))
console.log(calculator(34, 56, "multiply"))