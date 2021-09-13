// const input = document.querySelector('#validation-input')
// const lengthinput = input.getAttribute('data-length')
// input.addEventListener('blur', colorval)

// function colorval() {
//   if (lengthinput > input.value.length) {
//     this.classList.remove('valid')
//     this.classList.add('invalid')
//   } else {
//     this.classList.remove('invalid')
//     this.classList.add('valid')
//   }
// }
const input = document.querySelector('#validation-input')
const lengthinput = input.getAttribute('data-length')
input.addEventListener('blur', colorval)

// function colorval() {
//   if (lengthinput < input.value.length) {
//     this.classList.remove('invalid')
//     this.classList.add('valid')
//   } else {
//     this.classList.remove('valid')
//     this.classList.add('invalid')
//   }
// }

function colorval() {
  if (lengthinput > input.value.length) {
    updateClassElem('valid', 'invalid')
  } else {
    updateClassElem('invalid', 'valid')
  }
}

function updateClassElem(remove, add) {
  this.classList.remove(remove)
  this.classList.add(add)
}
