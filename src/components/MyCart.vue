<template >
    <router-link :to="{name: 'cart'}" class="cart">
        Корзина 
        <strong>
            0 $
        </strong>
        /
        <strong>
            0
        </strong>
    </router-link>
</template>
<script>
export default {
    name: 'MyCart'
}
</script>
<style scoped>
    .cart{
        text-decoration: none;
        cursor: pointer;
        border: 2px solid orange;
        color: orange;
        padding: 10px 15px;
        transform: skewX(-10deg);
        font-weight: bold;
    }
    .cart:hover{
        background-color: orange;
        color: #fff;
        transition: all 300ms ease;
    }
</style>