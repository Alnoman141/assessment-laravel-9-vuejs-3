<template>
  <div class="bg-dark">
    <div id="login">
      <div class="card p-0 text-center">
        <div class="card-header py-3">Login</div>
        <div class="card-body py-3">
          <form>
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
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
            <button
              @click.prevent="login"
              type="submit"
              class="btn btn-primary"
            >
              Login
            </button>
            <hr />
            <router-link
              class="d-inline nav-link mt-3 btn btn-primary btn-sm py-2 px-5 text-light"
              aria-current="page"
              to="/register"
              >Register</router-link
            >
            <router-link
              class="d-inline nav-link mt-3 btn btn-primary btn-sm py-2 mx-5 px-3 text-light"
              aria-current="page"
              to="/customer/login"
              >Customer Login</router-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validEmail } from "@/utils/validate";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      message: "",
    };
  },
  created() {
    if (this.$store.state.userStore.token) {
      this.$router.push("/");
    }
  },
  methods: {
    // user login
    login() {
      if (!validEmail(this.user.email)) {
        this.message = "Please enter a valid email";
      } else if (this.user.email === "" || this.user.password === "") {
        this.message = "Please fill all the fields";
      } else {
        this.$store
          .dispatch("userStore/login", this.user)
          .then((res) => {
            if (res.status === 200) {
              this.$router.push("/dashboard");
            }
          })
          .catch((err) => {
            this.message = "Login Failed";
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  place-content: center;
  height: 100vh;
}
</style>
