<template>
  <div id="header" class="d-flex align-items-center px-4">
    <ul class="nav">
      <li class="nav-item mr-4">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cart">Cart<span v-if="itemCount > 0">({{ itemCount }})</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    itemCount() {
      return this.$store.getters.count
    }
  }
}
</script>

<style scoped>
#header {
  position: sticky;
  top: 0;
  height: 60px;
  background: #111111;
}

a {
  color: #ffffff;
}

a:hover {
  text-decoration: none;
  opacity: 0.75;
  color: #ffffff;
}
</style>