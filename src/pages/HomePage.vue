<template>
  <div id="home">
    {{this.$store.state.cart}}
    <div  class="flex">
      <my-categories 
        :categories="categories"
        :selectedCategory="selectedCategory"
        @setCategory="setSelectedCategory"
      />

      <div>
        <strong>Сортировка по: </strong>
        <my-sort 
      
        />
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



export default {
  components: { MyCategories, MySort, MyPhone},
  name: 'Home',
  data(){
    return {
      categories: [
        "Новые", 
        "Черные",
        "Белые",
        "Samsung", 
        "Iphone", 
        'Mi',
      ],
      selectedCategory: 0,
      phones: []
    }
  },
  methods: {
    setSelectedCategory(id){
      this.selectedCategory = id;
    },
    async fetchData(){
      const resp = await fetch('http://localhost:3001/phones');
      this.phones = await resp.json();
    },
  },
  created(){
    this.fetchData()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  *{
    font-family: Poppins;
  }
  #home{
    padding: 20px;
    max-width: 1200px;
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
</style>
