<template>
  <div class="mx-auto">
    <navbar-component></navbar-component>
    <div class="row">
      <div class="col-2">
        <sidebar-component></sidebar-component>
      </div>
      <div class="col-10 main">
        <router-view></router-view>
      </div>
    </div>
    <footer class="bg-dark text-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="text-center">© 2021 - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavbarComponent from "./navbar.vue";
import SidebarComponent from "./sidebar.vue";
export default {
  components: {
    NavbarComponent,
    SidebarComponent,
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 90vh;
  overflow-y: auto;
}
</style>
