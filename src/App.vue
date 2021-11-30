<template>
  <div id="app">
    <div class="flex">
      <router-link class="logo" :to="{name: 'home'}">
        <h1>
          Mobile <span>Store</span>
        </h1>
      </router-link>
      <my-cart />
    </div>
    <hr/>
    

    <router-view></router-view>

  </div>
</template>

<script>
import MyCart from './components/MyCart.vue'

export default {
  name: 'app',
  components: {
    MyCart
  },
  data(){
    return {
    
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  *{
    font-family: Poppins;
  }
  #app{
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
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
