<template>
  <div class="home">
    <section class="section">
      <SearchField class="container" text="Your city"/>
    </section>
    <section class="section">
      <ForecastGrid/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchField from "@/components/SearchField.vue";
import ForecastGrid from "@/components/ForecastGrid.vue";

export default {
  name: "home",
  components: {
    SearchField,
    ForecastGrid
  }
};
</script>
