<template>
  <div class="container py-5">
    <div class="d-flex justify-content-between align-items-stretch mb-5">
      <div class="item-img" :style="`background-image: url(${item.image_path})`"></div>
      <div class="col d-flex flex-column align-items-start">
        <h4 class="text-left text-white">{{ item.name }}</h4>
        <h5 class="text-left text-danger">${{ item.price }}</h5>
        <AddToCartBtn :item="item"/>
      </div>
      
    </div>
    <p class="text-left text-white">{{ item.description }}</p>
  </div>
</template>

<script>
import AddToCartBtn from '../components/items/AddToCartBtn'

export default {
  components: {
    AddToCartBtn
  },
  computed: {
    item() {
      return this.$store.getters.items.find((item) => {
        return item.id == this.$route.params.id
      })
    }
  }
}
</script>

<style scoped>
.item-img {
  height: 20rem;
  width: 20rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>