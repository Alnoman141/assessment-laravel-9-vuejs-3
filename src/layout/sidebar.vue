<template>
  <div class="sidebar list-group rounded-0">
    <router-link to="/" class="bg-dark text-light list-group-item active"
      >Dashboard</router-link
    >
    <router-link to="/" class="bg-dark text-light list-group-item"
      >Users</router-link
    >
    <router-link to="/" class="bg-dark text-light list-group-item"
      >Customers</router-link
    >
  </div>
</template>

<script>
export default {};
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
