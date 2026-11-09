import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'

const checklist = new FullList()
const listElement = document.querySelector('#listItems')

if (!listElement) {
  throw new Error('Checklist element is missing')
}

const renderList = () => {
  listElement.replaceChildren()

  for (const task of checklist.list) {
    const row = document.createElement('li')
    row.className = 'item'
    row.textContent = task.item
    listElement.append(row)
  }
}

checklist.load()
renderList()

const form = document.querySelector('#itemEntryForm')
const input = document.querySelector('#newItem')

if (!(form instanceof HTMLFormElement) || !(input instanceof HTMLInputElement)) {
  throw new Error('Checklist form or input is missing')
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const text = input.value.trim()
  if (text === '') return

  const task = new ListItem(crypto.randomUUID(), text)
  checklist.addItem(task)
  renderList()
  input.value = ''
})
