<template>
    <div>

        <div 
            class="card"
            v-if="!descShow"
        >
            <div class="card__img">
                <img 
                    :src= "phone.imageUrl"
                    :alt="phone.name"
                />
            </div>
            <h3>{{phone.name}}</h3>
            
            <ul class="flex">
                <li 
                    v-for="(color, index) in aviableColors" 
                    :key="index"
                    :id="(selectedColor === color) ? 'active' : '' "
                    :class="(!phone.colors.includes(color)) ? 'disabled' : '' "
                    @click="changeColor(color)"
                >   
                    {{ color }}
                </li> 
            </ul>

            <p class="card__price">Цена: <strong>{{phone.price}}$</strong></p>

            <div class="flex">
                 <button 
                    class="btn btn__cart" 
                    @click="addToCart"
                 >
                    Добавить
                 </button>
                 <button class="btn btn__info" @click="showInfo">Подробно</button>
            </div>
        </div>

        <!-- desc -->
        <div  class="card card__info" v-else>
            <h3> {{phone.name}}</h3>
            <p>{{phone.info}}</p>
            <button 
                class="btn"
                @click="hideInfo"
            >
                Назад
            </button>
        </div>

    </div>
</template>
<script>
export default {
    name: 'MyCard',
    props: ["phone"],
    data(){
        return{
            aviableColors: ['черный', 'серый', 'белый'],
            selectedColor: this.phone.colors[0],
            descShow: false
        }
    },
    methods: {
        changeColor(color){
            this.selectedColor = color
        },
        hideInfo(){
            this.descShow = false
        },
        showInfo(){
            this.descShow = true
        },
        addToCart(){
            const phone = {
                id: this.phone.id,
                color: this.selectedColor,
                name: this.phone.name,
                price: this.phone.price,
            }
            this.$store.dispatch('cart/addToCart', phone)
        }
    }
}
</script>
<style scoped>
    .card{
        margin: 20px 0;
        padding: 25px;
        /* border-radius: 10px; */
        width: 300px;
        box-shadow: 0 0 3px #ccc;
        height: 390px;
    }
    .card__info{
        padding: 25px;
        display: flex;
        flex-direction: column;
        height: 390px;

    }
    .card__info p {
        flex: 1 1 auto;
    }
    .card__img{
        width: 200px;
        height: 200px;
        margin: 0 auto;
    }
    .card__img img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .flex{
        display: flex;
        align-items: center;
        list-style-type: none;
        justify-content: space-between;
        padding: 0;
    }
    .flex li {
        border: 1px solid orange;
        color: orange;
        padding: 7px;
        transform: skew(-20deg);
        width: 70px;
        text-align: center;
        cursor: pointer;
        transition: all 300m linear;
        font-size: 14px;
        font-weight: bold;
    }
    
    #active{
        cursor: pointer;
        padding: 10px;
        background-color: orange;
        color: #fff;
        border-color: orange;
        box-shadow: 0 0 3px orange;
    }
    .disabled{
        color: rgb(243, 229, 229);
        border-color: #ccc !important;
        cursor: not-allowed;
        color: #ccc !important;
        pointer-events: none;
    }
    .btn{
        font-weight: bold;
        width: 45%;
        padding: 10px;
        border: 1px solid #000;
        color: #000;
        background: #fff;
        cursor: pointer;
        transform: skew(-20deg);
        transition: all 300ms linear;
    }

    .btn:hover{
        background-color:  rgb(56, 56, 56);
        color: #fff;
        transition: all 300ms linear;
        box-shadow: 0 0 3px #000;
    }
    .btn__cart{
        background-color: #fff;
        color: #20c997;
        border-color:#20c997;
    }
    .btn__cart:hover{
        background-color: #20c997;
        box-shadow: 0 0 3px #20c997;
    }

    .btn__info{
        border-color: rgb(40, 7, 92);
        color: rgb(40, 7, 92);
    }

    .btn__info:hover{
        background-color: rgb(40, 7, 92);
        color: #fff;
        border-color: rgb(40, 7, 92);
        box-shadow: 0 0 3px rgb(40, 7, 92);
    }
    
</style>