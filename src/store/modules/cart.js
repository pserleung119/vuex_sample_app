import Item from '../../modules/item'

const state = {
  items: []
}

const getters = {
  cart: state => state.items,
  count: state => state.items.length
}

const actions = {
  addItem ({ commit }, item = false) {
    commit('addItem', item || new Item())
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
