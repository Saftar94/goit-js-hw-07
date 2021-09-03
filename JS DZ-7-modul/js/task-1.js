const catEl = document.querySelectorAll('.item')
console.log(`В списке ${catEl.length} категории.`)

const catUl = document.querySelectorAll('#categories>li')
catUl.forEach((el) => {
  console.log(
    `Категория: ${el.firstElementChild.textContent}, Количество элементов: ${el.lastElementChild.children.length}`,
  )
})
