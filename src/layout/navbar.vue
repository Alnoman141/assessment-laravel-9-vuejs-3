<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container py-2">
      <a class="navbar-brand" href="#">
        <img
          src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Bootstrap
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <router-link v-if="!$store.state.userStore.token && !$store.state.customerStore.token" class="nav-link" aria-current="page" to="/register"
              >Register</router-link
            >
          </li>
          <li class="nav-item" v-if="$store.state.userStore.token">
            <a @click.prevent="logout" class="nav-link" href="#"
              >Logout</a
            >
          </li>
          <li class="nav-item" v-if="$store.state.customerStore.token">
            <a @click.prevent="logoutCustomer" class="nav-link" href="#"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("userStore/logout").then(() => {
        this.$router.push("/login");
      });
    },
    logoutCustomer() {
      this.$store.dispatch("customerStore/logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style></style>
