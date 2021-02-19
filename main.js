// createc 4 button Calculator


document.querySelector('.add').addEventListener('click', add)
document.querySelector('.subtract').addEventListener('click', subtract)
document.querySelector('.multiply').addEventListener('click', multiply)
document.querySelector('.divide').addEventListener('click', divide)
document.querySelector('.clear'),addEventListener('click', clear)


// help form tamika
function add(){
  let num1 = document.querySelector('#num1').value
  let num2 = document.querySelector('#num2').value
let result = parseInt(num1) + parseInt(num2)
document.querySelector('.result').innerText = parseInt(result)
}

function subtract(){
  let num1 = document.querySelector('#num1').value
  let num2 = document.querySelector('#num2').value
let result = parseInt(num1) - parseInt(num2)
document.querySelector('.result').innerText = parseInt(result)
}

function multiply(){
  let num1 = document.querySelector('#num1').value
  let num2 = document.querySelector('#num2').value
let result = parseInt(num1) * parseInt(num2)
document.querySelector('.result').innerText = parseInt(result)
}


function divide(){
  let num1 = document.querySelector('#num1').value
  let num2 = document.querySelector('#num2').value
let result = parseInt(num1) / parseInt(num2)
document.querySelector('.result').innerText = parseInt(result)
}

function clear(){
  let num1 = document.querySelector('#num1')
  let num2 = document.querySelector('#num2')
document.querySelector('.result').innerText = parseInt(result)
}
