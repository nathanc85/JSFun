let items = document.querySelector('.items')
console.log(items)

//items.remove()

items.firstElementChild.textContent = 'Yellow'
items.children[1].textContent = 'Red'

let btn1 = document.querySelector('.btn')
  .addEventListener('click', e => {
    e.preventDefault()
    e.target.style.background = 'Red'
    console.log(e)
  })




  ///////////////////
  let btn2 = document.querySelector('.btn')
  .addEventListener('mouseover', e => {
    e.preventDefault()
    console.log(e)
  })