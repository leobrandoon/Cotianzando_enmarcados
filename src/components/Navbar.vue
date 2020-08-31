<template>
  <header>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>

        <!-- Enmarcaciones -->
        <b-nav-item-dropdown text="Enmarcaciones" right>
          <b-dropdown-item href="#">Molduras</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- espejos -->
        <b-nav-item-dropdown text="Espejos" right>
          <b-dropdown-item href="#">Espejos Decortivos</b-dropdown-item>
          <b-dropdown-item href="#">Espejos Envejecidos</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="#">Cotiza Online</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
</style>>
