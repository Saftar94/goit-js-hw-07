const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]
// const elemUl = document.querySelector('#endregion')
// const addLi = ingredients.reduce((str, value) => str + `<li>${value}</li> `, '')
// console.log(addLi)

// elemUl.innerHTML = addLi

let elemUl = document.querySelector('#ingredients')

const addLi = ingredients.map((ingredient) => {
  const itemLi = document.createElement('li')
  itemLi.textContent = ingredient
  console.log(ingredient)
  return addLi
})

elemUl.append(...addLi)
