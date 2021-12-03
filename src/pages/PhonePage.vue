<template lang="">
    <div class="row">
        <div class="column">
           <div class="column__info">
                <h2>Смартфон марка: {{this.phone.name}}</h2>
                <p class="column__info-text">
                    {{this.phone.info}}
                </p>
                <h4 class="column__info-price">Цена продукта: <span>{{this.phone.price}}$</span></h4>
           </div>
            <div class="btns">
                <p>Выберите цвет смартфона:</p>
                <ul class="colors">
                    <li 
                        v-for="color in this.phone.colors" 
                        v-bind:key="color"
                        :class="'btn__' + color"
                        :id="(color == selectedColor) ? `btn__color-active` : '' "
                        @click="selectColor(color)"
                    >
                        {{color}}
                    </li>
                </ul>
                <button class="btn btn__add">Добавить</button>
                <button class="btn btn__back" @click="$router.push('/')">
                    Назад
                </button>
            </div>
        </div>
        <img :src="this.phone.imageUrl" :alt="this.phone.name" />
    </div>
</template>
<script>

export default {
    name: "PhonePage",
    data(){
        return{
            phone: {},
            selectedColor: "",
        }
    },
    methods: {
        selectColor(color){
            console.log(color);
        }
    },
    created(){
        this.phone = this.$store.getters['phonesObj/getPhoneById'](this.$route.params.id) 
    }
}
</script>
<style scoped>
    .row{
        display: flex;
        margin: 70px 0;
    }
    .row img{
        height: 500px;
        width: 500px;
        object-fit: contain;
    }
    .column{
        display: flex;
        flex-direction: column;
    }
    .column__info{
        flex: 1 1 auto;
    }
    .column__info-text{
        overflow-y: auto;
        height: 250px;
    }
    .column__info h2{
        margin: 0;
    }
    .column__info-price{
        margin: 0;
    }
    .column__info-price span{
        color: orange;
    }
    .colors{
        display: flex;
        padding: 0;
        list-style-type: none;
    }
    .colors li {
        border: 1px solid orange;
        padding: 10px;
        width: 70px;
        text-align: center;
        cursor: pointer;
        transition: all 300m linear;
        font-size: 14px;
        font-weight: bold;
        margin-right: 10px;
        border-radius: 3px;
        text-transform: uppercase;
    }
    .colors li:hover{
        transition: all 300ms linear;
        color: #fff;
    }
    .btn__add{
        width: 300px;
        background-color: #fff;
        color: #20c997;
        border-color:#20c997;
    }
    .btn__add:hover{
        background-color: #20c997;
        box-shadow: 0 0 3px #20c997;
    }
    .btn__black{
        border: 1px solid black !important;
    }
    .btn__black:hover{
        background-color: #000 !important
    }
    .btn__black-active{
        background-color: #000 !important
    }
    .btn__gray{
        border: 1px solid gray !important;
        color: gray;
    }
    .btn__gray:hover{
        background-color: gray;
        color: gray;
    }
    .btn__gray-active{
        background-color: gray;
        color: gray;
    }
    .btn__white{
        border: 1px solid #ccc !important;
        color: #ccc !important;
    }
    .btn__white:hover{
        background-color: #ccc !important;
        color: #fff !important;
    }
    .btn__white-active{
        background-color: #ccc !important;
        color: #fff !important;
    }
    .btn__back:hover{
        background-color: #000 !important;
        color: #fff !important;
    }
    .btn__back{
        width: 300px;
        margin: 0 10px;
    }

</style>