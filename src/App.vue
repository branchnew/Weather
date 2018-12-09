<template>
  <div id="app">
    <nav class="navbar is-primary">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/cities">Cities of the world</router-link>
      <router-link class="navbar-item" to="/wiki">Wiki</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '../node_modules/bulma/bulma.sass';
</style>
