<template>
    <div class="has-text-centered is-size-3" v-if="city.name">{{ city.name }}, {{ city.country }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CityName",
  components: { 
  },
  computed: mapState({
    city: state => state.city
  })
};

</script>

<style>

</style>
