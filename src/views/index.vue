<template>
    <div id="dashboard">
        <div v-if="$store.state.userStore.token" class="authorized">
            <h2>Welcome, {{ $store.state.userStore.user.name }}</h2>
        </div>
        <div v-else class="unauthorized">
            <h2>Please Login to continue <router-link to="/login">Login</router-link></h2>
        </div>
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