import Items from '../../data/items.json'

const state = {
  items: Items
}

const getters = {
  items: state => state.items
}

const actions = {
}

const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
