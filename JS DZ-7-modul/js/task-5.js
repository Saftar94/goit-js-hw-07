let inputName = document.querySelector('#name-input')
let outPutName = document.querySelector('#name-output')

inputName.oninput = function () {
  if (inputName.value === '') {
    outPutName.innerHTML = 'незнакомец'
  } else {
    outPutName.innerHTML = inputName.value
  }
}
