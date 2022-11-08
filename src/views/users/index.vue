<template>
  <div id="app">
    <h3 class="my-3">User List</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">UserID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <th scope="row">{{ index+1 }}</th>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        // Get all users
        getUsers() {
            this.$store.dispatch('userStore/getUsers').then(({ data }) => {
                this.users = data.users;
            });
        }
    }
};
</script>

<style></style>
