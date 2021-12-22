<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <v-app-bar-title
        class="sticky"
      >
        Cutler Thayer
      </v-app-bar-title>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
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

.sticky {
  color: secondary;
}
</style>
