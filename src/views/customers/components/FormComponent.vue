<template>
  <div :class="`alert alert-${message.type}`" role="alert">
    {{ message.text }}
  </div>
  <form>
    <div class="row mb-3">
      <label for="inputName" class="col-sm-4 col-form-label">Name</label>
      <div class="col-sm-8">
        <input
          v-model="customer.name"
          type="text"
          class="form-control"
          id="inputName"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-4 col-form-label">Email</label>
      <div class="col-sm-8">
        <input
          v-model="customer.email"
          type="email"
          class="form-control"
          id="inputEmail3"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-4 col-form-label"
        >Password</label
      >
      <div class="col-sm-8">
        <input
          v-model="customer.password"
          type="password"
          class="form-control"
          id="inputPassword3"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword4" class="col-sm-4 col-form-label"
        >Confirm Password</label
      >
      <div class="col-sm-8">
        <input
          v-model="customer.password_confirmation"
          type="password"
          class="form-control"
          id="inputPassword4"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="address" class="col-sm-4 col-form-label">Address</label>
      <div class="col-sm-8">
        <input
          v-model="customer.address"
          type="text"
          class="form-control"
          id="address"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["customer", "message"],
  methods: {},
};
</script>

<style></style>
