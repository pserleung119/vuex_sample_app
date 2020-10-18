<template>
  <div id="header" class="d-flex align-items-center justify-content-between px-4">
    <ul class="nav">
      <li class="nav-item mr-4">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cart">Cart<span v-if="itemCount > 0">({{ itemCount }})</span></router-link>
      </li>
    </ul>
    <div>
      <div class="input-group input-group-sm">
        <input class="rounded float-right px-2" type="text" placeholder="Search..">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>
      </div>
    </div>
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
  z-index: 1000;
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