<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import MainLayout from './templates/MainLayout.vue'
import EmptyLayout from './templates/EmptyLayout.vue'
import Cookies from 'js-cookie'
export default {
  name: 'app',
  components: {
    MainLayout,
    EmptyLayout
  },
  data(){
    return {
    
    }
  },
  computed:{
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  created(){
    const token = JSON.parse(Cookies.get('token'))
    if(!token){
      this.$router.push({name: "auth"})
    }else{
      this.$store.dispatch('auth/logIn', token.auth)
      this.$router.push({name: "home"}, token)
    }
    this.$store.dispatch('phonesObj/fetchPhones')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Poppins:wght@300;400;600&display=swap');
  *{
    font-family: Montserrat ;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app{
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .flex{
    display: flex;
    align-items: center;
    list-style-type: none;
    justify-content: space-between;
    padding: 0;
  }
</style>
