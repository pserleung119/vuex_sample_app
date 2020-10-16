<template>
  <div class="card">
    <img :src="item.image_path" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <h5 class="card-title">${{ item.price }}</h5>
      <p class="card-text">{{ item.description }}</p>
      <button @click="addToCart(item)" class="btn btn-primary">Add to cart</button>
    </div>
  </div>
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

<style scoped>
  .card {
    width: 14rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    background: #444444;
    color: #ffffff;
  }
</style>