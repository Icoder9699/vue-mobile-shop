<template>
    <div class="cart">
        <div class="cart__empty">
            <h2>Корзина пустая</h2>
            <p>
                Вероятней всего, вы не заказывали ещё телефон.
                Для того, чтобы заказать телефон, перейдите на главную страницу.        
            </p>
            <img 
                src="../assets/cart.png"
                alt="no-image"
            />
            <button class="btn btn__cart" @click="$router.push('/')">Вернутся назад</button>
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
        flex-direction: column;
        justify-content: center;
        padding: 50px;
        width: 500px;
        margin: 0 auto;
        text-align: center;
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
    .btn__cart{
        height: 50px;
        width: 200px;
        margin: 0 auto;
        border: 2px solid orange;
        background-color: transparent;;
        transform: skew(-15deg);
        color: orange;
        font-weight: bold;
        transition: all 300ms linear ease-in;
        cursor: pointer;
    }
    .btn__cart:hover{
        background-color: orange;
        color: #000;
        box-shadow: 0 0 3px orange;
    }
</style>