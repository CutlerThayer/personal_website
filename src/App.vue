<template>
  <v-app>
    <v-main>
      <Menu/>
      <Home/>
      <About/>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/siteContent/Menu';
import Home from './components/siteContent/Home';
import About from './components/siteContent/About';

export default {
  name: 'App',

  components: {
    Menu,
    Home,
    About,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
* {
  max-width: 100%;
}
</style>
