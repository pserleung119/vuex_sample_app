<template>
  <div class="card">
    <img :src="item.image_path" class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title">{{ item.name }}</h4>
      <h4 class="card-title">${{ item.price.toLocaleString() }}</h4>
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
    width: 20rem;
    margin-right: 1rem;
    margin-left: 1rem;
    background: #444444;
    color: #ffffff;
  }
  .card:nth-of-type(1) {
    margin-left: 0rem;
  }
</style>