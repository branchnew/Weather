<template>
  <div class="searchField">
    <input type="text" :value="city" @input="update" class="input is-large" :placeholder="text">
  </div>
</template>

<script>
import { FETCH_FORECAST } from "../constants";

export default {
  name: "SearchField",
  data: () => {
    return {
      city: ""
    };
  },
  props: {
    text: String
  },
  methods: {
    update(e) {
      this.$store.dispatch(FETCH_FORECAST, { city: e.target.value });
    }
  }
};
</script>