<template>
  <div class="sidebar list-group rounded-0">
    <div v-if="$store.state.userStore.token">
      <router-link
        to="/"
        :class="`bg-dark text-light list-group-item ${
          activeRoute === '/dashboard' ? 'active' : ''
        }`"
        exact
      >
        Dashboard</router-link
      >
      <router-link
        to="/users"
        :class="`bg-dark text-light list-group-item ${
          activeRoute === '/users' ? 'active' : ''
        }`"
        exact
        >Users</router-link
      >
      <router-link
        to="/customers"
        :class="`bg-dark text-light list-group-item ${
          activeRoute === '/customers' ? 'active' : ''
        }`"
        exact
        >Customers</router-link
      >
      <router-link
        to="/bills"
        :class="`bg-dark text-light list-group-item ${
          activeRoute === '/bills' ? 'active' : ''
        }`"
        exact
        >Bills</router-link
      >
    </div>
    <div v-if="$store.state.customerStore.token">
      <router-link
        to="/customers/dashboard"
        :class="`bg-dark text-light list-group-item ${
          activeRoute === '/customers/dashboard' ? 'active' : ''
        }`"
        exact
      >
        Customer Dashboard</router-link
      >
      <router-link
        to="/customers/bills"
        :class="`bg-dark text-light list-group-item ${
          activeRoute === '/customers/bills' ? 'active' : ''
        }`"
        exact
      >
        My Bills</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      activeRoute: "",
    };
  },
  created() {
    this.activeRoute = this.$route.path;
  },
  watch: {
    $route() {
      this.activeRoute = this.$route.path;
    },
  },
};
</script>

<style scoped>
.active {
  background-color: #ddd !important;
  color: #212529 !important;
  border: 1px solid #ddd !important;
}

.sidebar {
  height: 90vh;
  background-color: #212529;
}
</style>
