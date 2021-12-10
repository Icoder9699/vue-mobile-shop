<template>
    <div class="flex">
        <router-link class="logo" :to="{name: 'home'}">
            <h1>
            Mobile <span>Store</span>
            </h1>
      </router-link>
      <div v-if="token">
        
      </div>
    <my-cart />
    </div>
</template>

<script>
import MyCart from "./MyCart.vue"

export default {
    components: {MyCart}
    
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