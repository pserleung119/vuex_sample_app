<template>
  <div class="container p-4">
    <div v-if="beforePurchase">
      <div class="d-flex justify-content-between align-items-center mb-4 border-bottom">
        <div class="col text-left">
          <p class="text-white text-left">Item Count: {{ itemCount.toLocaleString() }}</p>
          <p class="text-white text-left">Item Price: {{ totalPrice.toLocaleString() }}</p>
        </div>
      </div>
      <div>
        <form class="border p-5 rounded">
          <div class="form-group">
            <div>
              <p class="text-left text-white">Card Number</p>
              <input type="number" class="form-control" id="inputCardNumber">
            </div>
          </div>
          <div class="form-group">
            <div>
              <p class="text-left text-white">Card Holder</p>
              <input type="text" class="form-control" id="inputCardHolder">
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" @click="purchase()">Purchase</button>
          </div>
        </form>
      </div>
    </div>
    <div v-else>
      <h2 class="text-white">Thank you!</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      beforePurchase: true
    }
  },
  computed: {
    itemCount() {
      return this.$store.getters.count
    },
    totalPrice() {
      return this.$store.getters.price
    }
  },
  methods: {
    purchase() {
      this.$store.dispatch('emptyCart')
      this.beforePurchase = false
    }
  }
}
</script>

<style scoped>
  .form {
    width: 500px;
  }
</style>