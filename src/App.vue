<template>
  <v-app>
    <v-app-bar
      app
      color="bg_color"
      elevation=0
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
import Home from './components/Home';
import About from './components/About';

export default {
  name: 'App',

  components: {
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
