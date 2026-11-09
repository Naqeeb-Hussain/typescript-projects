import ListItem from './ListItem'
export interface List {
  list: ListItem[]
  load(): void
  save(): void
  clearList(): void
  addItem(itemObj: ListItem): void
  removeItem(id: string): void
}

export default class FullList implements List {
  list: ListItem[] = []

  addItem(item: ListItem): void {
    this.list.push(item)
    this.save()
  }

  removeItem(id: string): void {
    this.list = this.list.filter((item) => item.id !== id)
    this.save()
  }

  clearList(): void {
    this.list = []
    this.save()
  }

  save(): void {
    const items = this.list.map(({ id, item, checked }) => ({ id, item, checked }))
    localStorage.setItem('checklist', JSON.stringify(items))
  }

  load(): void {
    const saved = localStorage.getItem('checklist')
    if (saved === null) return

    const items: { id: string; item: string; checked: boolean }[] = JSON.parse(saved)
    this.list = items.map(({ id, item, checked }) => new ListItem(id, item, checked))
  }
}
