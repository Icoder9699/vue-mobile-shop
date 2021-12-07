<template>
    <div class="cart">
        <div class="cart__empty" v-if="!this.$store.state.cart.phones">
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
        <div v-else class="cart__orders">
            <h2>Ваши заказы</h2>
            <div class="orders">
                <div class="order" v-for="cartItem in cartItems" :key="cartItem.id">
                    <img :src="cartItem.imageUrl" :alt="cartItem.name" />
                    <div>
                        <strong>Название продукта: </strong> 
                        <div>{{cartItem.name}}</div>
                    </div>
                    <div>
                        <strong>Цена: </strong>{{cartItem.price}}$
                    </div>
                    <div class="counter">
                        <button>-</button> 
                            {{cartItem.count}}
                        <button>+</button> 
                    </div>
                    <button class="btn btn__delete">удалить</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: "CartPage",
    computed: {
        ...mapGetters({
            cartItems:'cart/getCartItems'
        })
    }
}
</script>

<style scoped>
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
    .btn__cart{
        transition: all 300ms linear;
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
    .cart__orders{
        border: 1px solid #ccc;
        padding: 20px;
    }
    .order{
        margin-top: 10px;
        border: 1px solid #ccc;
        height: 60px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .order img {
        height: 80px;
        width: 80px;
        margin-right: 10px;
        object-fit: contain;
    }
    .counter{
        display: flex;
        align-items: center;
    }
    .counter button{
        border-radius: 50%;
        border: 1px solid #ccc;
        margin: 10px;
        cursor: pointer;
        font-size: 16px;
    }
    .btn__delete{
        width: 80px;
        padding: 4px;
        border-color: red;
        color: red;
    }
    .btn__delete:hover{
        background-color: red;
        color: #fff;
    }
</style>