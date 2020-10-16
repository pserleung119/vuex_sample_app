<template>
  <button @click="addToCart(item)" class="btn btn-primary">Add to cart</button>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('addItem', item)
    }
  } 
}
</script>