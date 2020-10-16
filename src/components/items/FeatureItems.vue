<template>
  <div class="card">
    <img :src="item.image_path" class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title">{{ item.name }}</h4>
      <h4 class="card-title">${{ item.price }}</h4>
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
    width: 18rem;
    margin-right: 1rem;
    margin-left: 1rem;
    background: #444444;
    color: #ffffff;
  }
  .card:nth-of-type(1) {
    margin-left: 0rem;
  }
</style>