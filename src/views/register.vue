<template>
  <div class="bg-dark">
    <div id="register">
      <div class="card p-0 text-center">
        <div class="card-header py-3">Register</div>
        <div :class="`alert alert-${message.type}`" role="alert">
          {{ message.text }}
        </div>
        <div class="card-body py-3">
          <form>
            <div class="row mb-3">
              <label for="inputName" class="col-sm-4 col-form-label"
                >Name</label
              >
              <div class="col-sm-8">
                <input
                  v-model="user.name"
                  type="text"
                  class="form-control"
                  id="inputName"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-4 col-form-label"
                >Email</label
              >
              <div class="col-sm-8">
                <input
                  v-model="user.email"
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
                  v-model="user.password"
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
                  v-model="user.password_confirmation"
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                />
              </div>
            </div>
            <button
              @click.prevent="register"
              type="submit"
              class="btn btn-primary"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validEmail, isEmpty } from "@/utils/validate";
export default {
  name: "Register",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      message: {
        type: "",
        text: "",
      },
    };
  },
  created() {
    if (this.$store.state.userStore.token) {
      this.$router.push("/");
    }
  },
  methods: {
    register() {
      if (isEmpty(this.user)) {
        this.message = {
          type: "danger",
          text: "Please fill all the fields",
        };
      } else if (!validEmail(this.user.email)) {
        this.message = {
          type: "danger",
          text: "Please enter a valid email address",
        };
      } else if (this.user.password !== this.user.password_confirmation) {
        this.message = {
          type: "danger",
          text: "Password and Confirm Password do not match",
        };
      } else {
        const user = this.$store.dispatch("userStore/register", this.user);
        this.message = {
          type: "success",
          text: "Registration successful. Please login!",
        };
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
#register {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  place-content: center;
  height: 100vh;
}
</style>
