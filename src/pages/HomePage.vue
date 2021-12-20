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

    <my-search
      :search="search"
      @onChange="onChange"
    />

    <div class="products" v-if="this.phones.length > 0">
      <my-phone   
        v-for="phone in phones"   
        :key="phone.id"
        :phone="phone"
      />
    </div>
    <h2 style="text-align: center; color: red;padding: 30px" v-else>Пока телефонов нет</h2>
  
  </div>
</template>

<script>
// libraries 

// components
import MyCategories from '../components/MyCategories.vue';
import MyPhone from '../components/MyPhone.vue';
import MySort from '../components/MySort.vue';
import {mapGetters} from 'vuex'
import MySearch from '../components/MySearch.vue';

export default {
  components: { MyCategories, MySort, MyPhone, MySearch},
  name: 'Home',
  data(){
    return {
      categories: [
        "Samsung", 
        "Iphone", 
        'Mi',
      ],
      search: ""
    }
  },
  methods: {
    onChange(value){
      this.search = value
    },
    searchPhone(){
      const phone = this.phones.map(phone => {
        if(phone.indexOf(this.search)){
          console.log(phone)
        }
      })

      console.log(phone);
    }
  },
  watch: {
    search(){
      this.searchPhone()
    },
  },
  computed: {
    ...mapGetters({
      phones: 'phonesObj/getPhones',
    }),
  },
}
</script>

<style>
  #home{
    padding: 20px;
    max-width:  1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .search-input{
    align-self: flex-end;
    margin: 10px 0;
    padding: 10px;
    width: 420px;
    outline: none;
    border: 1px solid #ccc;
  }

  .search-input:focus{
    border: 1px solid transparent;
    box-shadow: 0 0 3px green;
  }

  .products{
    display: flex;
    flex-wrap: wrap;
    margin: 20px -20px;
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
