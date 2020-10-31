<template>
  <div class="container p-4">
  
    <div class="d-flex justify-content-between align-items-center mb-4 border-bottom">
      <div class="col text-left">
        <p class="text-white text-left">Item Count: {{ itemCount.toLocaleString() }}</p>
        <p class="text-white text-left">Item Price: {{ totalPrice.toLocaleString() }}</p>
        <button class="btn btn-sm btn-danger ml-1 mb-3" @click="emptyCart()" :disabled="itemCount == 0">Empty Cart</button>
      </div>
    </div>

    <div class="col d-flex flex-column justify-content-center" v-if="itemCount > 0">
      <CartItems v-for="(item, index) in items" v-bind:key="index" :item="item" :index="index"/>
    </div>

    <div class="col d-flex flex-column justify-content-center" v-else>
      <h4 class="text-white">There is no item in the cart.</h4>
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
    emptyCart() {
      if (window.confirm('Are you sure?')) {
        this.$store.dispatch('emptyCart')
      }
    }
  }
}
</script>
