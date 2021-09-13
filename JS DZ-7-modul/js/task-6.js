// document.querySelector('#validation-input').onblur = function () {
//   console.log(this.value.length)
//   if (this.getAttribute('data-length') > this.value.length) {
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

function colorval() {
  if (lengthinput === input.value.length) {
    updateClassElem('valid', 'invalid')
  } else {
    updateClassElem('invalid', 'valid')
  }
}

function updateClassElem(add, remove) {
  input.classList.add(remove)
  input.classList.remove(add)
}
