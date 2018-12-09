<template>
  <div class="forecastGrid tile is-ancestor">
    <ForecastBlock v-for="weather in forecast" :key="weather.dt" :weather="weather"/>
  </div>
</template>

<script>
import ForecastBlock from "@/components/ForecastBlock.vue";
import { mapState } from "vuex";

export default {
  name: "ForecastGrid",
  components: {
    ForecastBlock
  },
  computed: mapState({
    forecast: state => state.forecast
  })
};
</script>

<style>
</style>
