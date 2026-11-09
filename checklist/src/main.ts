import './css/style.css'
import FullList from './model/FullList'

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
