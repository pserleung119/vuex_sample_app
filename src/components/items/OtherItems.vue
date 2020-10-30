<template>
  <div class="card">
    <img :src="item.image_path" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <h5 class="card-title">${{ item.price.toLocaleString() }}</h5>
      <router-link :to="'/item/' + item.id" class="btn btn-info mr-2">Details</router-link>
      <AddToCartBtn :item="item"/>
    </div>
  </div>
</template>

<script>
import AddToCartBtn from './AddToCartBtn'

export default {
  components: {
    AddToCartBtn
  },
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
    width: 16rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    background: #444444;
    color: #ffffff;
  }
</style>