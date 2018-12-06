<template>
  <div id="app">
    <div class="navbar is-primary">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '../node_modules/bulma/bulma.sass';
</style>
