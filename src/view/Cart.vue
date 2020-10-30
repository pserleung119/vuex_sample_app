<template>
  <div class="container p-4">
    <div class="mb-5">
      <button class="btn btn-danger mr-1" @click="deleteItem()">-</button>
      <button class="btn btn-success ml-1" @click="addItem()">+</button>
    </div>
  
    <h3 class="text-white mb-4">Item Count: {{ itemCount.toLocaleString() }}</h3>
    <h3 class="text-white mb-4">Item Price: {{ totalPrice.toLocaleString() }}</h3>
    <div class="col d-flex flex-column justify-content-center">
      <CartItems v-for="(item, index) in items" v-bind:key="index" :item="item" :index="index"/>
    </div>
  </div>
</template>

<script>
import CartItems from '../components/items/CartItems'

export default {
  name: 'Index',
  components: {
    CartItems
  },
  computed: {
    itemCount() {
      return this.$store.getters.count
    },
    items() {
      return this.$store.getters.cart
    },
    totalPrice() {
      return this.$store.getters.price
    }
  },
  methods: {
    deleteItem() {
      this.$store.dispatch('deleteItem')
    },
    addItem() {
      this.$store.dispatch('addItem')
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
