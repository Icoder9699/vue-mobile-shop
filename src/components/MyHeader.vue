<template>
    <div class="flex">
        <router-link class="logo" :to="{name: 'home'}">
            <h1>
            Mobile <span>Store</span>
            </h1>
      </router-link>
      <div v-if="this.token">
          <router-link to="/">Logout</router-link>
      </div>
      <div v-else>
          Sign In
      </div>
    <my-cart />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyCart from "./MyCart.vue"

export default {
    components: {MyCart},
    computed:{
        ...mapGetters({
            token: 'auth/getToken'
        }),
    },
}
</script>

<style scoped>
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
    }
    .logo{
        text-decoration: none;
        color: orange;
        transform: skewX(-15deg);
        cursor: pointer;
    }
    .logo span{
        background-color: #000;
        padding: 10px;
    }
</style>