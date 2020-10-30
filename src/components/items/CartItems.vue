<template>
  <div class="d-flex justify-content-between rounded border mb-3 p-3 text-left text-white" :index="index" data-aos="fade-up">
    <div class="d-flex col justify-content-between align-items-center">
      <span class="mr-2">{{ item.name }}</span>
      <span>${{ price }}</span>
    </div>
    <button class="btn text-white" @click="deleteItem(index)">x</button>
  </div>
</template>

<script>
import { priceDelimiter } from '@/utils/price.js'
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    price() {
      return priceDelimiter(this.item.price)
    }
  },
  methods: {
    deleteItem(index) {
      this.$store.dispatch('deleteItem', index)
    }
  }
}
</script>

<style scoped>

</style>