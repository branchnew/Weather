<template>
  <div class="forecastBlock tile is-parent">
    <div class="tile is-child box has-text-centered">
      <p class="is-size-4">{{ dayOfWeek }}</p>
      <img :src="icon" alt="">
      <p class="is-size-5">{{ desc }}, {{ temp }}°C</p>
    </div>
  </div>
</template>

<script>
import { ICON_URL } from "../constants";

export default {
  name: "ForecastBlock",
  props: {
    weather: Object
  },
  computed: {
    icon() { return `${ICON_URL}${this.weather.weather[0].icon}.png`; },
    desc() { return this.weather.weather[0].main; },
    temp() { return Math.round(this.weather.main.temp); },
    dayOfWeek() {
      let a = new Date(this.weather.dt*1000);//timestamp millisec.
      let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      return days[a.getDay()];
    
    }
  }
};
</script>

<style>
</style>
