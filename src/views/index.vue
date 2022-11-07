<template>
    <div id="dashboard">
        <h2>Please Login to continue <router-link to="/login">Login</router-link></h2>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#dashboard {
    display: flex;
    flex-direction: column;
    place-content: center;
    height: 90vh;
}
</style>