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
    this.$store.dispatch('phonesObj/fetchPhones')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Poppins:wght@300;400;600&display=swap');
  *{
    font-family: Montserrat;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app{
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
