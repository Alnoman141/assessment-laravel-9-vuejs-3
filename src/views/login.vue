<template>
  <div class="bg-dark">
    <div id="login">
      <div class="card p-0 text-center">
        <div class="card-header py-3">Login</div>
        <div class="card-body py-3">
          <form>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-4 col-form-label"
                >Email</label
              >
              <div class="col-sm-8">
                <input type="email" class="form-control" id="inputEmail3" />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-4 col-form-label"
                >Password</label
              >
              <div class="col-sm-8">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword3"
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
