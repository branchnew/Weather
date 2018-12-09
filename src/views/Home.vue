<template>
  <div class="home">
    <section class="section">
      <div class="container">
        <div class="columns">
          <SearchField class="column is-half is-offset-one-quarter" text="Your city"/>
        </div>
        <div class="columns">
          <CityName class="column is-half is-offset-one-quarter"/>
        </div>
      </div>
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
import CityName from "@/components/CityName.vue";

export default {
  name: "home",
  components: {
    SearchField,
    ForecastGrid,
    CityName
  }
};
</script>
