<template>
  <section class="section">
    <div class="container">
      <div class="tile is-ancestor">
        <CitiesBlock v-for="(city, index) in cities" :key="city" v-if="index < 4" :city="city"/>
      </div>
      <div class="tile is-ancestor">
        <CitiesBlock v-for="(city, index) in cities" :key="city" v-if="index >= 4" :city="city"/>
      </div>
    </div>
  </section>
 
</template>

<script>
import CitiesBlock from "@/components/CitiesBlock.vue";

export default {
  name: "cities",
  components: {
    CitiesBlock
  },
  data: () => {
    return {
      cities: [
        "Firenze",
        "Rabat",
        "Gothenburg",
        "Tokyo",
        "Paris",
        "Melbourne",
        "Punta Arenas",
        "Vancouver"
      ]
    };
  }
};
</script>
