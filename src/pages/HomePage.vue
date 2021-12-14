<template>
  <div id="home">
    <!-- {{this.$store.state.cart}} -->
    <div  class="flex">
      <my-categories 
        :categories="categories"
      />

      <div>
        <strong>Сортировка по: </strong>
        <my-sort />
      </div>

    </div>

    <div class="products" v-if="this.phones.length > 0">
      <my-phone   
        v-for="phone in phones"   
        :key="phone.id"
        :phone="phone"
      />
    </div>
    <h2 style="text-align: center; color: red;" v-else>Пока телефонов нет</h2>

  </div>
</template>

<script>
// libraries 

// components
import MyCategories from '../components/MyCategories.vue';
import MyPhone from '../components/MyPhone.vue';
import MySort from '../components/MySort.vue';
import {mapGetters} from 'vuex'

export default {
  components: { MyCategories, MySort, MyPhone},
  name: 'Home',
  data(){
    return {
      categories: [
        "Samsung", 
        "Iphone", 
        'Mi',
      ],
    }
  },
  methods: {
    async fetchData(id = null){
      this.$store.dispatch('phonesObj/fetchPhones', id)
    },
  },
  computed: {
    ...mapGetters({
      phones: 'phonesObj/getPhones',
    })
  },
  mounted(){
    this.fetchData()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  *{
    font-family: Poppins;
  }
  #home{
    padding: 20px;
    max-width:  1200px;
    margin: 0 auto;
  }

  .products{
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    justify-content: space-between;
  }

  @media (max-width:765px) {
    #app{
      flex-wrap: wrap;
      justify-content: center;
    }
    .flex{
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .btn{
    font-weight: bold;
    padding: 10px;
    border: 1px solid #000;
    color: #000;
    background: #fff;
    cursor: pointer;
    transition: all 300ms linear;
  }

  .btn:hover{
    background-color:  rgb(56, 56, 56);
    color: #fff;
    transition: all 300ms linear;
    box-shadow: 0 0 3px #000;
  }
</style>
