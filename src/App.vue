<template>
  <div id="app" class="container">
    <img alt="ledodeco logo" src="./assets/logo_leodeco.jpg" width="150px" />
    <Navbar />

    <Cotizador  />
  </div>
</template>

<script>
import Cotizador from "./components/Cotizador.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Cotizador,
    Navbar,
  },
};
</script>

<style scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
 