class Item {
  constructor(name = false, price = false) {
    this.name = name || randomName()
    this.price = price || randomPrice()
  }
}

function randomName() {
  const name = ['Item A', 'Item B', 'Item C']
  return name[Math.floor(Math.random() * name.length)]
}

function randomPrice() {
  return Math.floor(Math.random() * 1000)
}

export default Item
