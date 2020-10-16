<template>
  <div class="container p-5">
    <section>
      <h4 class="text-left text-white">Feature Items</h4>  
      <div class="d-flex">
        <FeatureItems v-for="(item, index) in featureItems" :item="item" v-bind:key="index"/>
      </div>
    </section>
    <section>
      <h4 class="text-left text-white">Other Items</h4>  
      <div class="d-flex flex-wrap">
        <OtherItems v-for="(item, index) in otherItems" :item="item" v-bind:key="index"/>
      </div>
    </section>
  </div>
</template>

<script>
import Items from '../data/items.json'
import FeatureItems from '../components/items/FeatureItems'
import OtherItems from '../components/items/OtherItems'

export default {
  name: 'Index',
  components: {
    FeatureItems,
    OtherItems
  },
  methods: {
  },
  computed: {
    featureItems() {
      return Items.filter((item) => {
        return item.feature
      })
    },
    otherItems() {
      return Items.filter((item) => {
        return !item.feature
      })
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
section {
  margin-bottom: 5rem;
}
</style>
