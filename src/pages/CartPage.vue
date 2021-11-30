<template>
    <div class="cart">
        <div class="cart__empty">
            <h2>Корзина пустая</h2>
            <p>
                Вероятней всего, вы не заказывали ещё телефон.
                Для того, чтобы заказать телефон, перейдите на главную страницу.        
            </p>
            <img 
                src="../../public/empty-cart.png"
                alt="no-image"
            />
            <button @click="$router.push('/')">Вернутся назад</button>
        </div>
    </div>
</template>
<script>

export default {
    
}
</script>

<style scoped>
    .cart{

    }
    .cart__empty{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 50px;
        width: 500px;
        margin: 0 auto;
    }
    .cart__empty img{
        width: 300px;
        height: 300px;
        object-fit: contain;
        margin: 0 auto;
    }
    h2{
        text-align: center;
    }
</style>