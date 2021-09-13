const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]
// const elemUl = document.querySelector('#ingredients')
// const addLi = ingredients.reduce((str, value) => str + `<li>${value}</li> `, '')
// console.log(addLi)

// elemUl.innerHTML = addLi

const elemUl = document.querySelector('#ingredients')

const creatListOfIngredients = (elemet) => {
  const addLi = elemet.map((el) => {
    const itemEl = document.createElement('li')
    itemEl.textContent = el

    return itemEl
  })
  return addLi
}
const elements = creatListOfIngredients(ingredients)

elemUl.append(...elements)
