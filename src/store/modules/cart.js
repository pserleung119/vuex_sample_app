import Item from '../../modules/item'

function filterItemProperty(item) {
  if (!item) {
    return new Item()
  }
  return new Item(item.name, item.price.toLocaleString())
}

function calculateTotalPrice(items) {
  if (!items.length) {
    return 0
  }
  let amount = 0
  items.forEach((item) => {
    amount += item.price
  })

  return amount
}

const state = {
  items: []
}

const getters = {
  cart: state => state.items,
  count: state => state.items.length,
  price: state => calculateTotalPrice(state.items)
}

const actions = {
  addItem ({ commit }, item = false) {
    commit('addItem', filterItemProperty(item))
  },
  deleteItem ({ commit }, index = null) {
    commit('deleteItem', index)
  }
}

const mutations = {
  addItem (state, item) {
    state.items.push(item)
  },
  deleteItem (state, index) {
    if (index) {
      state.items.splice(index, 1)
    } else {
      state.items.pop()
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
