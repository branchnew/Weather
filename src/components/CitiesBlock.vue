<template>
  <div class="citiesBlock tile is-parent">
    <div class="tile is-child box has-text-centered">
      <p class="is-size-4">{{ name }}, {{ country }}</p>
      <img :src="icon" alt="">
      <p class="is-size-5">{{ desc }}, {{ temp }}°C</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import {
  API_ADDRESS,
  APP_ID,
  ICON_URL
} from "../constants";



export default {
  name: "CitiesBlock",
  data: () => {
    return {
      name: "",
      country: "",
      icon: "",
      desc: "",
      temp: ""
    }
  },
  props: {
    city: String
  },
  created: async function() {
    const result = await axios.get(`${API_ADDRESS}weather?q=${this.city}&appid=${APP_ID}&units=metric`);
    const data = result.data;
    this.name = data.name;
    this.country = data.sys.country;
    this.icon = `${ICON_URL}${data.weather[0].icon}.png`;
    this.desc = data.weather[0].main;
    this.temp = Math.round(data.main.temp);
  }
};
</script>

<style>
</style>
