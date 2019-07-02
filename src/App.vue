<template>
  <div id="app">
    <Logo :loading="loading" />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '@/components/Logo.vue';

export default Vue.extend({
  components: {
    Logo,
  },

  data() {
    return {
      loading: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.loading = true;
    }, 5000);

    setTimeout(() => {
      this.loading = false;
    }, 10000);
  },
});
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap")

\:root
  --main: #7107f4
  --blue: #00a2ff
  --dark-blue: #1181c2
  --text: #303030
  --sub-text: #5d666b
  --danger-red: #f54b4b
  --subtle-gray: #dfebf2

body
  font-family: "Poppins", sans-serif
  font-size: 16px
  line-height: 1.44em
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

p
  margin-bottom: 1.25em

h1, h2, h3, h4, h5
  margin: 2.75rem 0 1rem
  font-weight: 700
  line-height: 1.15

h1
  margin-top: 0
  font-size: 2.488em

h2
  font-size: 2.074em

h3
  font-size: 1.728em

h4
  font-size: 1.44em

h5
  font-size: 1.2em

small
.text_small
  font-size: 0.833em

#app
  color: #2c3e50
  margin: auto
  max-width: 520px
  padding: 26px
  text-align: center

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983
</style>
