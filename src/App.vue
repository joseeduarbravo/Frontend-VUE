<template>

  <v-app>
  
<Barra />
    <v-main>
      <router-view/>

  <!-- <Equipo></Equipo>     -->
    </v-main>
    
    <v-footer app>
<Footer></Footer>
    </v-footer>
  </v-app>

</template>

<script>
import Barra from './components/Barra.vue'
import Footer from './components/Footer.vue'
//import Equipo from './components/Equipo.vue'
export default {
  name: 'App',
  components:{
    Barra,
    Footer,
    //Equipo
  },
  data: () => ({
  
  }),
};
</script>
