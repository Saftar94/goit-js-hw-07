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

const addLi = ingredients.forEach((ingredient) => {
  const itemLi = document.createElement('li')
  elemUl.append(itemLi)
  itemLi.innerHTML = ingredient

  console.log(itemLi)
})

// ==========
// как я могу вывести в консоль просто имена???
// Я уже все перепробовал только LI выходит
