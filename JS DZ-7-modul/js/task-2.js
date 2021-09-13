const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]
const elemUl = document.querySelector('#endregion')
const addLi = ingredients.reduce((str, value) => str + `<li>${value}</li> `, '')
console.log(addLi)

elemUl.innerHTML = addLi
