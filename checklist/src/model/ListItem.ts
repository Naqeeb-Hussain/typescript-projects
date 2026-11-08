export interface Item {
  id: string
  item: string
  checked: boolean
}

export default class ListItem implements Item {
  id: string
  item: string
  checked: boolean

  constructor(id: string, item: string, checked = false) {
    this.id = id
    this.item = item
    this.checked = checked
  }
}