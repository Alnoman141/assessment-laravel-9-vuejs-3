<template>
  <div class="my-2 mx-auto">
    <navbar-component></navbar-component>
    <div class="row">
        <div class="col-2">
            <sidebar-component></sidebar-component>
        </div>
        <div class="col-10">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "./navbar.vue";
import SidebarComponent from "./sidebar.vue";
export default {
    components: {
        NavbarComponent,
        SidebarComponent
    },
};
</script>

<style></style>
