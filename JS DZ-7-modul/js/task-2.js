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

let elemUl = document.querySelector('#ingredients')

const addLi = (ingredient) =>
  ingredient.map((el) => {
    const itemLi = document.createElement('li')
    itemLi.textContent = el
    return itemLi
  })
elemUl.append(...addLi(ingredients))
